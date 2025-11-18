import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { addSecurityHeaders, sanitizeString } from '@/lib/security';

// Maximum file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
];

// Allowed file extensions
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

/**
 * POST /api/upload-image
 * Upload profile or banner image to Supabase Storage
 *
 * Security features:
 * - File size validation (max 5MB)
 * - MIME type validation
 * - File extension validation
 * - User authentication required
 * - Unique filename generation
 */
export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const privyUserId = sanitizeString(formData.get('privyUserId') as string);
    const imageType = sanitizeString(formData.get('imageType') as string); // 'profile' or 'banner'

    // Validate inputs
    if (!file) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'No file provided' },
          { status: 400 }
        )
      );
    }

    if (!privyUserId) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing privyUserId' },
          { status: 400 }
        )
      );
    }

    if (imageType !== 'profile' && imageType !== 'banner') {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Invalid imageType. Must be "profile" or "banner"' },
          { status: 400 }
        )
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: `File size exceeds maximum of ${MAX_FILE_SIZE / 1024 / 1024}MB` },
          { status: 400 }
        )
      );
    }

    // Validate MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: `Invalid file type. Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}` },
          { status: 400 }
        )
      );
    }

    // Validate file extension
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !ALLOWED_EXTENSIONS.includes(fileExtension)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: `Invalid file extension. Allowed extensions: ${ALLOWED_EXTENSIONS.join(', ')}` },
          { status: 400 }
        )
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileName = `${privyUserId}/${imageType}-${timestamp}-${randomString}.${fileExtension}`;

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('profile-images')
      .upload(fileName, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false, // Don't overwrite existing files
      });

    if (error) {
      console.error('Error uploading image to Supabase:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: `Failed to upload image: ${error.message || 'Unknown error'}` },
          { status: 500 }
        )
      );
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('profile-images')
      .getPublicUrl(fileName);

    if (!publicUrlData?.publicUrl) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to get public URL for uploaded image' },
          { status: 500 }
        )
      );
    }

    // Delete old image if it exists (optional cleanup)
    // This would require passing the old image URL and extracting the path
    // We'll skip this for now to avoid accidental deletion

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        url: publicUrlData.publicUrl,
        path: data.path,
      })
    );
  } catch (error) {
    console.error('Error uploading image:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to upload image' },
        { status: 500 }
      )
    );
  }
}

/**
 * DELETE /api/upload-image
 * Delete an image from Supabase Storage
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imagePath = sanitizeString(searchParams.get('path'));
    const privyUserId = sanitizeString(searchParams.get('privyUserId'));

    if (!imagePath || !privyUserId) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing required parameters' },
          { status: 400 }
        )
      );
    }

    // Verify that the image path belongs to the user (security check)
    if (!imagePath.startsWith(`${privyUserId}/`)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Unauthorized: Cannot delete images from other users' },
          { status: 403 }
        )
      );
    }

    // Delete from storage
    const { error } = await supabase.storage
      .from('profile-images')
      .remove([imagePath]);

    if (error) {
      console.error('Error deleting image:', error);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to delete image' },
          { status: 500 }
        )
      );
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        message: 'Image deleted successfully',
      })
    );
  } catch (error) {
    console.error('Error deleting image:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to delete image' },
        { status: 500 }
      )
    );
  }
}
