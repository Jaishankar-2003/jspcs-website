# Adding Your Logo

To use your custom logo image:

1. Place your logo file in the `/public` directory
2. Name it `logo.png` (or update the `logoSrc` prop in Logo component)
3. Supported formats: PNG, JPG, SVG
4. Recommended size: 200x200px or larger (will be scaled automatically)

The logo component will automatically use your image if:
- The file exists at `/public/logo.png`
- You pass `useImage={true}` to the Logo component

If the image fails to load, it will automatically fall back to the SVG logo design.

## Current Usage

The logo is currently used in:
- **Navbar** - Medium size with text
- **Footer** - Medium size with text  
- **Hero Section** - Extra large size, graphic only (no text)

