# MTVET Sabah - Peneraju Masa Depan

A modern, responsive website for Majlis TVET Sabah built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI Components** - Built with shadcn/ui
- **Video Background** - Hero section with video background
- **Image Galleries** - Beautiful image carousels and galleries
- **Contact Forms** - Interactive contact sections
- **Multi-page Navigation** - Home, Introduction, Organization, Activities, Contact

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
mtvet/
├── public/
│   └── assets/          # Static assets (images, videos, PDFs)
├── src/
│   ├── components/ui/   # UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
├── vite.config.ts      # Vite configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8080`

## 🚀 Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Deploy!

### Option 2: Deploy from Local

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## ✅ What's Fixed for Vercel

- **Asset Paths**: All assets now use `/assets/` instead of `/src/assets/`
- **Static Assets**: Images, videos, and PDFs are properly placed in `public/assets/`
- **Build Configuration**: Vite config optimized for production builds
- **Vercel Ignore**: Proper `.vercelignore` file to exclude unnecessary files

## 🎯 Key Pages

- **Home** (`/`) - Main landing page with video hero
- **Pengenalan** (`/pengenalan`) - Introduction to TVET Sabah
- **Organisasi** (`/organisasi`) - Organization structure
- **Aktiviti** (`/aktiviti`) - Activities and events
- **Hubungi Kami** (`/hubungi-kami`) - Contact information

## 🔧 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎨 Customization

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Components**: Edit files in `src/components/ui/`
- **Content**: Update page content in `src/pages/`
- **Assets**: Replace files in `public/assets/`

## 🚨 Troubleshooting

### Assets Not Loading on Vercel?
- ✅ Assets are now properly placed in `public/assets/`
- ✅ All paths updated from `/src/assets/` to `/assets/`
- ✅ Build tested and verified

### Build Errors?
- ✅ Dependencies properly installed
- ✅ Vite configuration optimized
- ✅ TypeScript configuration verified

## 📞 Support

For any issues or questions, please check:
1. All assets are in `public/assets/` folder
2. All component paths use `/assets/` not `/src/assets/`
3. Build completes successfully with `npm run build`

---

**Built with ❤️ for Majlis TVET Sabah**
