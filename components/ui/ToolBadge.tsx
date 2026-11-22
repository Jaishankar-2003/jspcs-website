import React from 'react'

export interface ToolBadgeProps {
  name: string
  showLabel?: boolean
  className?: string
  size?: 'sm' | 'md'
  theme?: 'light' | 'dark'
}

/**
 * High-precision vector SVG badges for software, engines and creative tools.
 */
function getToolVisual(name: string, theme: 'light' | 'dark'): { icon: React.ReactNode; bg: string; text: string; label: string } {
  const n = name.toLowerCase().trim()

  // Steam
  if (n.includes('steam')) {
    return {
      label: 'Steam',
      bg: 'bg-[#171a21]',
      text: 'text-[#66c0f4]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.707L.421 14.88C1.845 20.088 6.536 24 12.138 24 18.766 24 24 18.627 24 12S18.608 0 11.979 0zM7.54 18.216l-1.464-.606c.263.545.735.972 1.328 1.18.919.324 1.933-.146 2.257-1.066.166-.47.135-.97-.087-1.408a1.8 1.8 0 0 0-.825-.807l1.523.631c.783.324 1.157 1.22.833 2.003-.324.782-1.22 1.156-2.003.833a1.84 1.84 0 0 1-1.562-.76zM16.038 6.136c1.534 0 2.774 1.24 2.774 2.774s-1.24 2.773-2.774 2.773-2.773-1.24-2.773-2.773c0-1.534 1.24-2.774 2.773-2.774zm0 .888a1.887 1.887 0 1 0 0 3.774 1.887 1.887 0 0 0 0-3.774z"/>
        </svg>
      ),
    }
  }

  // Epic Games
  if (n.includes('epic')) {
    return {
      label: 'Epic Games',
      bg: 'bg-black',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M4.698 0L2.083 2.615v18.77L4.698 24h14.604l2.615-2.615V2.615L19.302 0zm11.365 19.354H7.937v-2.01h8.126zm0-4.021H7.937v-2.01h8.126zm0-4.02H7.937V9.302h8.126zm0-4.021H7.937V5.281h8.126z"/>
        </svg>
      ),
    }
  }

  // OBS Studio
  if (n.includes('obs')) {
    return {
      label: 'OBS Studio',
      bg: 'bg-[#212429]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.148c4.336 0 7.852 3.516 7.852 7.852 0 4.336-3.516 7.852-7.852 7.852A7.853 7.853 0 0 1 4.148 12c0-4.336 3.516-7.852 7.852-7.852zm-1.898 3.568a4.28 4.28 0 0 0-4.284 4.284c0 .873.266 1.684.717 2.361l1.791-3.102a2.38 2.38 0 0 1 2.062-1.18c.097 0 .193.007.287.02l.666-2.316a4.348 4.348 0 0 0-1.239-.067zm3.797.002a4.337 4.337 0 0 0-1.242.067l.666 2.316c.094-.014.19-.02.287-.02a2.38 2.38 0 0 1 2.063 1.18l1.79 3.102a4.27 4.27 0 0 0 .717-2.361 4.28 4.28 0 0 0-4.281-4.284zM12 11.234a.766.766 0 1 0 0 1.532.766.766 0 0 0 0-1.532z"/>
        </svg>
      ),
    }
  }

  // Discord
  if (n.includes('discord')) {
    return {
      label: 'Discord',
      bg: 'bg-[#5865F2]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    }
  }

  // Premiere Pro
  if (n.includes('premiere')) {
    return {
      label: 'Premiere Pro',
      bg: 'bg-[#00005b]',
      text: 'text-[#9999ff]',
      icon: <span className="font-black text-xs tracking-tighter">Pr</span>,
    }
  }

  // After Effects
  if (n.includes('after effects')) {
    return {
      label: 'After Effects',
      bg: 'bg-[#00005b]',
      text: 'text-[#d291ff]',
      icon: <span className="font-black text-xs tracking-tighter">Ae</span>,
    }
  }

  // Photoshop
  if (n.includes('photoshop')) {
    return {
      label: 'Photoshop',
      bg: 'bg-[#001e36]',
      text: 'text-[#31a8ff]',
      icon: <span className="font-black text-xs tracking-tighter">Ps</span>,
    }
  }

  // Illustrator
  if (n.includes('illustrator')) {
    return {
      label: 'Illustrator',
      bg: 'bg-[#330000]',
      text: 'text-[#ff9a00]',
      icon: <span className="font-black text-xs tracking-tighter">Ai</span>,
    }
  }

  // Audacity
  if (n.includes('audacity')) {
    return {
      label: 'Audacity',
      bg: 'bg-[#0000CD]',
      text: 'text-[#FFD700]',
      icon: <span className="font-black text-[11px] tracking-tighter">Au</span>,
    }
  }

  // DaVinci Resolve
  if (n.includes('davinci') || n.includes('resolve')) {
    return {
      label: 'DaVinci Resolve',
      bg: 'bg-[#1a1a24]',
      text: 'text-[#ff5533]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <circle cx="12" cy="7" r="4" fill="#ff5533" />
          <circle cx="7" cy="16" r="4" fill="#3399ff" />
          <circle cx="17" cy="16" r="4" fill="#33cc66" />
        </svg>
      ),
    }
  }

  // Blender
  if (n.includes('blender')) {
    return {
      label: 'Blender',
      bg: 'bg-[#E87D0D]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12.518 0a3.67 3.67 0 0 0-3.666 3.666c0 .48.093.939.263 1.359L4.417 7.43a3.64 3.64 0 0 0-1.895-.53A3.67 3.67 0 0 0-.004 10.57c0 1.258.634 2.37 1.6 3.032l-.004.062a8.887 8.887 0 0 0 17.774 0c0-.02 0-.042-.002-.062a3.665 3.665 0 0 0 1.954-3.232c0-2.025-1.642-3.667-3.668-3.667-.348 0-.683.05-1.002.14L13.79 3.023A3.65 3.65 0 0 0 12.518 0zm.006 10.372a5.215 5.215 0 0 1 5.216 5.216 5.215 5.215 0 0 1-5.216 5.215 5.215 5.215 0 0 1-5.215-5.215 5.215 5.215 0 0 1 5.215-5.216z"/>
        </svg>
      ),
    }
  }

  // VS Code
  if (n.includes('visual studio') || n.includes('vs code')) {
    return {
      label: 'VS Code',
      bg: 'bg-[#007ACC]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M17.653 2.001L8.337 9.878 3.55 6.223.784 7.575v8.85l2.766 1.352 4.787-3.655 9.316 7.877 5.563-2.67V4.671L17.653 2zm.89 4.398v11.202l-6.852-5.6 6.852-5.602z"/>
        </svg>
      ),
    }
  }

  // IntelliJ IDEA
  if (n.includes('intellij')) {
    return {
      label: 'IntelliJ',
      bg: 'bg-black',
      text: 'text-[#fe2857]',
      icon: <span className="font-black text-[11px] tracking-tighter">IJ</span>,
    }
  }

  // Android Studio
  if (n.includes('android')) {
    return {
      label: 'Android Studio',
      bg: 'bg-[#3DDC84]',
      text: 'text-graphite-900',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.411 13.8533 8.081 12 8.081s-3.5902.33-5.1367.8687L4.841 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
        </svg>
      ),
    }
  }

  // Docker
  if (n.includes('docker')) {
    return {
      label: 'Docker',
      bg: 'bg-[#0db7ed]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.575a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.083.186.185.186m0 2.715h2.118a.186.186 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.083.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.186H8.1a.185.185 0 0 0-.185.186v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185M23.792 11.8c-.465-.306-1.503-.433-2.316-.271-.167-.783-.699-1.464-1.228-2.008l-.29-.28-.352.2c-.754.426-1.396.985-1.84 1.637-.417-.066-.84-.092-1.272-.092H.363a.363.363 0 0 0-.363.363v.834c0 1.488.358 2.928 1.037 4.195 1.547 2.88 4.417 4.673 7.848 4.908.625.043 1.259.066 1.895.066 6.942 0 12.637-4.707 13.012-9.652z"/>
        </svg>
      ),
    }
  }

  // Git / GitHub
  if (n.includes('git')) {
    return {
      label: 'Git',
      bg: 'bg-[#F05032]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.124 0L8.831 2.564l3.153 3.153a1.78 1.78 0 0 1 1.77 1.77c0 .416-.142.798-.38 1.107l3.045 3.045c.31-.238.692-.38 1.108-.38a1.784 1.784 0 1 1 0 3.568 1.784 1.784 0 0 1-1.783-1.784c0-.415.142-.797.38-1.107l-3.045-3.046a1.77 1.77 0 0 1-1.108.38 1.78 1.78 0 0 1-1.77-1.77c0-.416.142-.798.38-1.108L7.426 4.385l-6.974 6.97a1.5 1.5 0 0 0 0 2.124l10.48 10.479a1.5 1.5 0 0 0 2.123 0l10.49-10.49a1.5 1.5 0 0 0 0-2.538z"/>
        </svg>
      ),
    }
  }

  // TradingView
  if (n.includes('tradingview')) {
    return {
      label: 'TradingView',
      bg: 'bg-black',
      text: 'text-[#2962FF]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M2 17h4v4H2zm6-8h4v12H8zm6-6h4v18h-4zm6 4h4v14h-4z"/>
        </svg>
      ),
    }
  }

  // MetaTrader
  if (n.includes('metatrader')) {
    return {
      label: 'MetaTrader',
      bg: 'bg-[#183153]',
      text: 'text-[#00c0f3]',
      icon: <span className="font-black text-[11px] tracking-tighter">MT</span>,
    }
  }

  // Microsoft Excel
  if (n.includes('excel')) {
    return {
      label: 'Excel',
      bg: 'bg-[#107C41]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.59 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 16.5v-9H1.5v9zm16.5 4.5V3H7.5v3H13q.41 0 .7.3.3.29.3.7v10q0 .41-.3.7-.29.3-.7.3H7.5v3z"/>
        </svg>
      ),
    }
  }

  // Python
  if (n.includes('python')) {
    return {
      label: 'Python',
      bg: 'bg-[#3776AB]',
      text: 'text-[#FFD43B]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M11.914 0C5.825 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.78 0 11.905c0 6.126 3.4 5.922 3.4 5.922h2.03v-2.859s-.11-3.411 3.355-3.411h5.782s3.245.053 3.245-3.155V3.155S18.3 0 11.914 0zm-1.71 1.765a1.043 1.043 0 1 1 0 2.086 1.043 1.043 0 0 1 0-2.086zm1.882 22.235c6.089 0 5.714-2.656 5.714-2.656l-.007-2.752H11.98v-.826h8.121s3.9.454 3.9-5.671c0-6.126-3.4-5.922-3.4-5.922h-2.03v2.859s.11 3.411-3.355 3.411H9.434s-3.245-.053-3.245 3.155v5.257s-.489 3.155 5.897 3.155zm1.71-1.765a1.043 1.043 0 1 1 0-2.086 1.043 1.043 0 0 1 0 2.086z"/>
        </svg>
      ),
    }
  }

  // PyTorch
  if (n.includes('pytorch')) {
    return {
      label: 'PyTorch',
      bg: 'bg-[#EE4C2C]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12.7 0a.7.7 0 0 0-.5.2L8.9 3.5a.7.7 0 0 0 .5 1.2h.1l2.4-.6v3.2a6 6 0 1 0 5.6 4.4.7.7 0 1 0-1.4-.4 4.6 4.6 0 1 1-4.2-3.4V4.1l2.5.6h.1a.7.7 0 0 0 .5-1.2l-3.3-3.3a.7.7 0 0 0-.5-.2z"/>
        </svg>
      ),
    }
  }

  // TensorFlow
  if (n.includes('tensorflow')) {
    return {
      label: 'TensorFlow',
      bg: 'bg-[#FF6F00]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">TF</span>,
    }
  }

  // CUDA / NVIDIA
  if (n.includes('cuda') || n.includes('nvidia')) {
    return {
      label: 'NVIDIA CUDA',
      bg: 'bg-[#76B900]',
      text: 'text-black',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M11.75 3.75C6.2 3.75 1.7 8.25 1.7 13.8c0 3.8 2.1 7.1 5.2 8.8l1.4-2.4C6 18.9 4.6 16.5 4.6 13.8c0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1 0 2.7-1.4 5.1-3.6 6.4l1.4 2.4c3.1-1.7 5.2-5 5.2-8.8 0-5.5-4.5-10.05-10.05-10.05z"/>
        </svg>
      ),
    }
  }

  // AutoCAD
  if (n.includes('autocad') || n.includes('cad')) {
    return {
      label: 'AutoCAD',
      bg: 'bg-[#E51937]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">CAD</span>,
    }
  }

  // Revit
  if (n.includes('revit')) {
    return {
      label: 'Revit',
      bg: 'bg-[#0696D7]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">Rvt</span>,
    }
  }

  // SketchUp
  if (n.includes('sketchup')) {
    return {
      label: 'SketchUp',
      bg: 'bg-[#005F9E]',
      text: 'text-[#EA212D]',
      icon: <span className="font-black text-xs tracking-tighter">SKP</span>,
    }
  }

  // Lumion
  if (n.includes('lumion')) {
    return {
      label: 'Lumion',
      bg: 'bg-[#182334]',
      text: 'text-[#00BCD4]',
      icon: <span className="font-black text-xs tracking-tighter">Lu</span>,
    }
  }

  // V-Ray
  if (n.includes('v-ray') || n.includes('vray')) {
    return {
      label: 'V-Ray',
      bg: 'bg-[#1A1A1A]',
      text: 'text-[#3E7BFA]',
      icon: <span className="font-black text-[11px] tracking-tighter">VR</span>,
    }
  }

  // 3ds Max
  if (n.includes('3ds max') || n.includes('3ds')) {
    return {
      label: '3ds Max',
      bg: 'bg-[#0696D7]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">3DS</span>,
    }
  }

  // Rhino
  if (n.includes('rhino')) {
    return {
      label: 'Rhino 3D',
      bg: 'bg-[#4B5563]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">Rh</span>,
    }
  }

  // Navisworks
  if (n.includes('navisworks')) {
    return {
      label: 'Navisworks',
      bg: 'bg-[#0696D7]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">NW</span>,
    }
  }

  // Enscape
  if (n.includes('enscape')) {
    return {
      label: 'Enscape',
      bg: 'bg-[#FF5500]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">Ens</span>,
    }
  }

  // Twinmotion
  if (n.includes('twinmotion')) {
    return {
      label: 'Twinmotion',
      bg: 'bg-black',
      text: 'text-[#00B4D8]',
      icon: <span className="font-black text-[11px] tracking-tighter">TM</span>,
    }
  }

  // ArcGIS Pro / ArcGIS
  if (n.includes('arcgis')) {
    return {
      label: 'ArcGIS Pro',
      bg: 'bg-[#007AC2]',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    }
  }

  // QGIS
  if (n.includes('qgis')) {
    return {
      label: 'QGIS',
      bg: 'bg-[#589632]',
      text: 'text-[#93B023]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M16 16l6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    }
  }

  // GDAL / Global Mapper / ENVI
  if (n.includes('gdal')) {
    return {
      label: 'GDAL',
      bg: 'bg-[#487858]',
      text: 'text-white',
      icon: <span className="font-black text-[10px] tracking-tighter">GDAL</span>,
    }
  }

  if (n.includes('global mapper')) {
    return {
      label: 'Global Mapper',
      bg: 'bg-[#1E3A8A]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">GM</span>,
    }
  }

  if (n.includes('google earth')) {
    return {
      label: 'Google Earth',
      bg: 'bg-[#4285F4]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">GE</span>,
    }
  }

  if (n.includes('envi')) {
    return {
      label: 'ENVI',
      bg: 'bg-[#0F766E]',
      text: 'text-white',
      icon: <span className="font-black text-[10px] tracking-tighter">ENVI</span>,
    }
  }

  // Proxmox
  if (n.includes('proxmox')) {
    return {
      label: 'Proxmox VE',
      bg: 'bg-[#E57000]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">PVE</span>,
    }
  }

  // TrueNAS
  if (n.includes('truenas')) {
    return {
      label: 'TrueNAS',
      bg: 'bg-[#0095D5]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">NAS</span>,
    }
  }

  // Linux
  if (n.includes('linux')) {
    return {
      label: 'Linux',
      bg: 'bg-[#FCC624]',
      text: 'text-black',
      icon: <span className="font-black text-xs">🐧</span>,
    }
  }

  // VMware / Hyper-V / VirtualBox
  if (n.includes('vmware')) {
    return {
      label: 'VMware',
      bg: 'bg-[#607078]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">VM</span>,
    }
  }

  if (n.includes('hyper-v')) {
    return {
      label: 'Hyper-V',
      bg: 'bg-[#0078D7]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">HV</span>,
    }
  }

  if (n.includes('virtualbox')) {
    return {
      label: 'VirtualBox',
      bg: 'bg-[#183A61]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">VB</span>,
    }
  }

  // Node.js / Postman / Jenkins / Kubernetes
  if (n.includes('node')) {
    return {
      label: 'Node.js',
      bg: 'bg-[#339933]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">JS</span>,
    }
  }

  if (n.includes('postman')) {
    return {
      label: 'Postman',
      bg: 'bg-[#FF6C37]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">PM</span>,
    }
  }

  if (n.includes('kubernetes')) {
    return {
      label: 'Kubernetes',
      bg: 'bg-[#326CE5]',
      text: 'text-white',
      icon: <span className="font-black text-[10px] tracking-tighter">K8s</span>,
    }
  }

  if (n.includes('jenkins')) {
    return {
      label: 'Jenkins',
      bg: 'bg-[#D24939]',
      text: 'text-white',
      icon: <span className="font-black text-[11px] tracking-tighter">JK</span>,
    }
  }

  // Ollama / Hugging Face / Jupyter
  if (n.includes('ollama')) {
    return {
      label: 'Ollama',
      bg: 'bg-black',
      text: 'text-white',
      icon: <span className="font-black text-xs">🦙</span>,
    }
  }

  if (n.includes('hugging')) {
    return {
      label: 'Hugging Face',
      bg: 'bg-[#FFD21E]',
      text: 'text-black',
      icon: <span className="font-black text-xs">🤗</span>,
    }
  }

  if (n.includes('jupyter')) {
    return {
      label: 'Jupyter',
      bg: 'bg-[#F37626]',
      text: 'text-white',
      icon: <span className="font-black text-xs tracking-tighter">Jp</span>,
    }
  }

  // MSI Afterburner / RTSS / AMD Software
  if (n.includes('afterburner') || n.includes('msi')) {
    return {
      label: 'MSI Afterburner',
      bg: 'bg-[#E51937]',
      text: 'text-white',
      icon: <span className="font-black text-[10px] tracking-tighter">MSI</span>,
    }
  }

  if (n.includes('rtss')) {
    return {
      label: 'RTSS',
      bg: 'bg-black',
      text: 'text-[#00FF66]',
      icon: <span className="font-black text-[10px] tracking-tighter">FPS</span>,
    }
  }

  if (n.includes('amd')) {
    return {
      label: 'AMD Software',
      bg: 'bg-[#ED1C24]',
      text: 'text-white',
      icon: <span className="font-black text-[10px] tracking-tighter">AMD</span>,
    }
  }

  // Broker / Terminal
  if (n.includes('broker') || n.includes('terminal')) {
    return {
      label: name,
      bg: 'bg-[#0F172A]',
      text: 'text-[#10B981]',
      icon: <span className="font-black text-xs">📈</span>,
    }
  }

  // Fallback - High contrast guarantee for light and dark
  return {
    label: name,
    bg: theme === 'dark' ? 'bg-burnt-500' : 'bg-graphite-900',
    text: 'text-white',
    icon: <span className="font-mono text-[10px] font-bold">{name.slice(0, 2).toUpperCase()}</span>,
  }
}

export default function ToolBadge({
  name,
  showLabel = true,
  className = '',
  size = 'sm',
  theme = 'light',
}: ToolBadgeProps) {
  const visual = getToolVisual(name, theme)
  const isSm = size === 'sm'
  const isDark = theme === 'dark'

  return (
    <span
      title={name}
      className={`inline-flex items-center gap-1.5 rounded-lg border transition-all group ${
        isDark
          ? 'border-white/15 bg-white/10 text-ivory-100 hover:border-burnt-400 hover:bg-white/15'
          : 'border-[#D9D4C7] bg-white text-graphite-900 shadow-sm hover:border-burnt-500 hover:shadow hover:bg-ivory-50/70'
      } ${isSm ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs'} ${className}`}
    >
      <span
        className={`shrink-0 rounded flex items-center justify-center p-0.5 shadow-sm ${visual.bg} ${visual.text} ${
          isSm ? 'w-4 h-4' : 'w-5 h-5'
        }`}
      >
        {visual.icon}
      </span>
      {showLabel && (
        <span
          className={`font-semibold transition-colors truncate max-w-[125px] ${
            isDark
              ? 'text-ivory-100 group-hover:text-white'
              : 'text-graphite-800 group-hover:text-burnt-600'
          }`}
        >
          {visual.label}
        </span>
      )}
    </span>
  )
}
