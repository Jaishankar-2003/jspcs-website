/**
 * Workload-based custom PC build categories.
 * Guidance only – no prices or FPS figures, because both change quickly and
 * must come from real quotes / real testing. Final parts are always chosen
 * after talking to the customer about their exact software and budget.
 */

export type BuildIconKey =
  | 'gamepad'
  | 'video'
  | 'code'
  | 'chart'
  | 'brain'
  | 'ruler'
  | 'map'
  | 'server'
  | 'sparkles'

export interface BuildTier {
  name: string
  forWho: string
  direction: string[]
}

export interface BuildPriority {
  part: string
  why: string
}

export interface BuildCategory {
  slug: string
  inquiryKey: string
  title: string
  shortTitle: string
  icon: BuildIconKey
  image: string
  tagline: string
  summary: string
  audience: string[]
  useCases: string[]
  priorities: BuildPriority[]
  tools: string[]
  tiers: BuildTier[]
  considerations: string[]
  upgrades: string[]
  note?: string
  faqs: { question: string; answer: string }[]
  seo: { title: string; description: string; keywords: string[] }
}

export const BUILD_CATEGORIES: BuildCategory[] = [
  // ── 1. Gaming & Streaming ────────────────────────────────────────────────
  {
    slug: 'gaming-streaming-pc',
    inquiryKey: 'Gaming',
    title: 'Gaming & Streaming PC',
    shortTitle: 'Gaming & Streaming',
    icon: 'gamepad',
    image: '/img/lookbook/category-gaming.webp',
    tagline: 'Smooth gameplay at the resolution you actually play.',
    summary:
      'We match the CPU and graphics card to your games, your monitor and your budget – so you are not paying for power you will never use, or stuck with a bottleneck.',
    audience: ['Casual gamers', 'Competitive & esports players', 'Streamers', 'Gaming content creators'],
    useCases: [
      '1080p high-refresh gaming',
      '1440p gaming',
      '4K gaming',
      'Streaming while gaming',
      'Recording & clipping gameplay',
    ],
    priorities: [
      { part: 'Graphics card (GPU)', why: 'Decides how many frames you get and which resolution you can play at. Usually the biggest part of a gaming budget.' },
      { part: 'Processor (CPU)', why: 'Matters most for high-refresh competitive games and for streaming on the same PC.' },
      { part: 'Monitor match', why: 'A 144Hz/165Hz screen needs a PC that can actually reach those frame rates – we plan both together.' },
      { part: 'Cooling & airflow', why: 'Keeps clocks steady during long sessions and keeps the PC quieter.' },
      { part: 'Power supply', why: 'A good-quality PSU protects your parts and leaves room for a future GPU upgrade.' },
    ],
    tools: ['Steam', 'Epic Games Launcher', 'OBS Studio', 'Discord', 'NVIDIA App', 'AMD Software', 'MSI Afterburner', 'RTSS'],
    tiers: [
      { name: 'Entry Gaming', forWho: 'Popular titles at 1080p, students on a budget', direction: ['6-core CPU', '16 GB RAM', 'Entry/mid-range GPU', '500 GB – 1 TB NVMe SSD'] },
      { name: 'Competitive Gaming', forWho: 'Esports titles at high refresh rates', direction: ['Fast gaming CPU', '16–32 GB RAM', 'Mid-range GPU', '1 TB NVMe SSD', 'Good air cooling'] },
      { name: 'High-Performance Gaming', forWho: 'AAA games at 1440p / 4K', direction: ['High-end CPU', '32 GB RAM', 'High-end GPU', '1–2 TB NVMe SSD', 'Strong cooling & PSU'] },
      { name: 'Gaming & Streaming', forWho: 'Play and stream / record on one PC', direction: ['8+ core CPU', '32 GB RAM', 'GPU with good hardware encoder', 'Extra SSD for recordings'] },
    ],
    considerations: [
      'Tell us the games you play and your monitor resolution – that decides most of the build.',
      'Frame rates depend on the game, settings and drivers. We share expected performance as estimates, not promises.',
      'Streaming adds load. Hardware encoders on modern GPUs help a lot.',
    ],
    upgrades: ['Leave PSU headroom for a bigger GPU later', 'Pick a platform with a CPU upgrade path', 'Free M.2 slot for more storage'],
    faqs: [
      { question: 'Can you tell me the FPS I will get?', answer: 'We can give realistic estimates for the games you play based on similar hardware. Actual FPS depends on game version, settings and drivers, so we label them as estimates.' },
      { question: 'Should I spend more on the CPU or the GPU?', answer: 'For most gaming builds the GPU matters more. Competitive high-refresh gaming and streaming need a stronger CPU too. We balance both for your use.' },
      { question: 'Can I reuse parts from my old PC?', answer: 'Often yes – storage, case, or sometimes the PSU. We check compatibility and condition before recommending reuse.' },
    ],
    seo: {
      title: 'Gaming & Streaming PC Build in Madurai | Custom Gaming PC – JSPCS',
      description: 'Custom gaming and streaming PC builds in Madurai. CPU and GPU matched to your games, monitor and budget. Entry, competitive, high-performance and streaming builds.',
      keywords: ['gaming pc build madurai', 'streaming pc build', 'custom gaming pc tamil nadu', 'gaming pc for 1440p', 'obs streaming pc'],
    },
  },

  // ── 2. Content Creation & Video Editing ─────────────────────────────────
  {
    slug: 'video-editing-content-creation-pc',
    inquiryKey: 'Video Editing',
    title: 'Content Creation & Video Editing PC',
    shortTitle: 'Video Editing & Creators',
    icon: 'video',
    image: '/img/lookbook/category-creator.webp',
    tagline: 'Faster timelines, quicker exports, less waiting.',
    summary:
      'Editing software uses hardware very differently from games. We plan the CPU, GPU, RAM and storage layout around your editor, your footage and how you deliver.',
    audience: ['YouTubers', 'Video & film editors', 'Freelance creators', 'Motion graphics artists', 'Colour grading professionals'],
    useCases: ['1080p editing', '4K editing', 'Multicam editing', 'Motion graphics', 'Heavy rendering', 'Photo editing'],
    priorities: [
      { part: 'Processor (CPU)', why: 'More cores help with exports, effects and encoding. Matters a lot in Premiere Pro and After Effects.' },
      { part: 'Graphics card (GPU)', why: 'Speeds up playback, effects and exports. DaVinci Resolve relies heavily on the GPU and its memory (VRAM).' },
      { part: 'RAM', why: '32 GB is a comfortable start for 4K; heavy After Effects or multicam work benefits from 64 GB or more.' },
      { part: 'Fast NVMe storage', why: 'Separate drives for the system, active projects and cache keep timelines smooth.' },
      { part: 'Media & backup storage', why: 'Footage grows quickly. Plan large drives and a backup copy from day one.' },
      { part: 'Display', why: 'A colour-accurate monitor matters if you grade or deliver for clients.' },
    ],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Photoshop', 'Illustrator', 'Blender', 'Audacity'],
    tiers: [
      { name: '1080p Editing', forWho: 'YouTube, reels, social content', direction: ['6–8 core CPU', '16–32 GB RAM', 'Mid-range GPU', '1 TB NVMe'] },
      { name: '4K Editing', forWho: 'Client work, 4K footage', direction: ['8–12 core CPU', '32–64 GB RAM', 'GPU with good VRAM', 'Separate project / cache SSD'] },
      { name: 'Multicam Editing', forWho: 'Events, interviews, podcasts', direction: ['High core-count CPU', '64 GB RAM', 'Strong GPU', 'Large fast storage'] },
      { name: 'Motion Graphics', forWho: 'After Effects-heavy work', direction: ['Fast multi-core CPU', '64 GB+ RAM', 'Capable GPU', 'Fast cache drive'] },
      { name: 'Heavy Rendering', forWho: 'Blender / 3D / long exports', direction: ['High core-count CPU', 'High-VRAM GPU', '64 GB+ RAM', 'Strong cooling'] },
      { name: 'Creator Workstation', forWho: 'Full-time studios', direction: ['Workstation-class CPU', '64–128 GB RAM', 'High-end GPU', 'NVMe + bulk storage + backup'] },
    ],
    considerations: [
      'Tell us which editor you use – Premiere Pro, After Effects and DaVinci Resolve each favour different parts.',
      'Camera codec matters. Some footage formats decode much better on specific hardware.',
      'Plan your backup: one copy on the PC is not a backup.',
    ],
    upgrades: ['Extra RAM slots free for later', 'Room for more NVMe drives', 'PSU sized for a GPU upgrade'],
    faqs: [
      { question: 'Is a gaming PC good for video editing?', answer: 'It can work, but editing usually needs more RAM, more CPU cores and a better storage layout. We plan for your editing software rather than games.' },
      { question: 'How much RAM do I need for 4K editing?', answer: '32 GB is a good starting point. Multicam, long timelines and After Effects work benefit from 64 GB or more.' },
      { question: 'Mac or Windows PC for editing?', answer: 'Both work. A custom Windows PC lets you upgrade parts over time and choose exactly where your budget goes.' },
    ],
    seo: {
      title: 'Video Editing PC Build in Madurai | Content Creator Workstation – JSPCS',
      description: 'Custom video editing and content creation PCs for Premiere Pro, After Effects, DaVinci Resolve and Blender. 1080p, 4K, multicam and rendering builds in Madurai.',
      keywords: ['video editing pc build madurai', 'content creator pc', 'premiere pro pc build', 'davinci resolve workstation', '4k editing pc'],
    },
  },

  // ── 3. Engineering & Software Development ───────────────────────────────
  {
    slug: 'software-development-pc',
    inquiryKey: 'Software Development',
    title: 'Engineering & Software Development PC',
    shortTitle: 'Developers & Engineers',
    icon: 'code',
    image: '/img/lookbook/category-developer.webp',
    tagline: 'Fast builds, smooth multitasking, room for containers and VMs.',
    summary:
      'Developers need a responsive machine more than a flashy one. We focus on CPU cores, plenty of RAM and fast SSDs so IDEs, Docker, VMs and dozens of browser tabs run together without slowing you down.',
    audience: ['Software developers', 'CS & engineering students', 'DevOps engineers', 'Frontend, backend & full-stack devs', 'Data professionals'],
    useCases: ['Multiple IDEs', 'Compiling large projects', 'Docker & containers', 'Virtual machines', 'Local databases', 'Kubernetes learning labs', 'CI/CD experiments', 'Heavy multitasking'],
    priorities: [
      { part: 'RAM', why: 'The biggest comfort factor. Docker, VMs, IDEs and browsers all eat memory. 32 GB is a sweet spot; 64 GB for heavy virtualisation.' },
      { part: 'Processor (CPU)', why: 'More cores mean faster compiles and more VMs/containers running at once. Virtualisation support (VT-x / AMD-V) is enabled and checked.' },
      { part: 'NVMe SSD', why: 'Fast storage speeds up builds, package installs, database work and VM disks.' },
      { part: 'Displays', why: 'Two monitors make coding, docs and testing far easier. We make sure the PC has the right outputs.' },
      { part: 'GPU', why: 'Not critical for most dev work – unless you also do ML, Android emulation or gaming.' },
    ],
    tools: ['Visual Studio Code', 'IntelliJ IDEA', 'Android Studio', 'Docker / Docker Desktop', 'Git & GitHub', 'Jenkins', 'VirtualBox', 'VMware', 'WSL', 'Linux', 'Postman', 'Node.js', 'Python'],
    tiers: [
      { name: 'Student Developer PC', forWho: 'Learning, college projects, coding practice', direction: ['6-core CPU', '16 GB RAM (upgradeable)', '512 GB – 1 TB NVMe', 'Integrated or basic GPU'] },
      { name: 'Full-Stack Development PC', forWho: 'Daily professional development', direction: ['8-core CPU', '32 GB RAM', '1 TB NVMe', 'Dual-monitor support'] },
      { name: 'DevOps & Virtualisation PC', forWho: 'Docker, Kubernetes labs, multiple VMs', direction: ['12+ core CPU', '64 GB RAM', '2 TB NVMe', 'Fast networking'] },
      { name: 'Engineering Workstation', forWho: 'Large codebases, simulations, mixed workloads', direction: ['High core-count CPU', '64–128 GB RAM', 'Multiple NVMe drives', 'GPU if needed'] },
    ],
    considerations: [
      'Windows, Linux or dual boot – we install and configure whichever you prefer, including WSL.',
      'Android Studio emulators and Docker Desktop benefit from more RAM and cores.',
      'Pick a motherboard with 4 RAM slots so you can grow from 32 GB to 64 GB later.',
    ],
    upgrades: ['Start with 32 GB, grow to 64 GB', 'Extra M.2 slots for VM storage', 'Add a GPU later for ML work'],
    faqs: [
      { question: 'Do developers need a graphics card?', answer: 'Usually not for web or backend work. If you plan to do machine learning, Android emulation or gaming, we add a suitable GPU.' },
      { question: 'Can you set up Linux or dual boot?', answer: 'Yes. We can install Ubuntu or other distributions, set up dual boot with Windows, or configure WSL.' },
      { question: 'How much RAM for Docker and VMs?', answer: '32 GB handles most development setups comfortably. If you run several VMs or a local Kubernetes cluster, 64 GB is better.' },
    ],
    seo: {
      title: 'Software Developer PC Build in Madurai | Programming Workstation – JSPCS',
      description: 'Custom PCs for developers and engineers – Docker, VMs, IDEs, Android Studio and WSL. Student, full-stack, DevOps and engineering workstation builds in Madurai.',
      keywords: ['developer pc build madurai', 'programming pc', 'docker workstation', 'software engineer pc build', 'computer science student pc'],
    },
  },

  // ── 4. Trading & Multi-Monitor ───────────────────────────────────────────
  {
    slug: 'trading-multi-monitor-pc',
    inquiryKey: 'Trading',
    title: 'Trading & Multi-Monitor Workstation',
    shortTitle: 'Trading & Multi-Monitor',
    icon: 'chart',
    image: '/img/lookbook/category-trading.webp',
    tagline: 'Stable, quiet and ready for multiple screens.',
    summary:
      'Trading and analysis setups need reliability and multiple displays more than raw power. We plan display outputs, RAM, power backup and network stability so the system stays dependable during market hours.',
    audience: ['Stock market traders', 'Financial analysts', 'Research professionals', 'Multi-screen dashboard users'],
    useCases: ['Multiple live charts', 'Browser-based trading platforms', 'Real-time dashboards', 'Research & news', 'Spreadsheet analysis'],
    priorities: [
      { part: 'Display outputs', why: 'The GPU (or motherboard) must support the number of monitors you want – 2, 3, 4 or more.' },
      { part: 'RAM', why: 'Many browser tabs and chart windows use a lot of memory. 16–32 GB keeps everything responsive.' },
      { part: 'Reliable SSD', why: 'Quick boot and app loading, with a quality drive for long-term reliability.' },
      { part: 'UPS & power', why: 'A UPS protects against power cuts during active sessions.' },
      { part: 'Network', why: 'Wired LAN is more stable than Wi-Fi. We can help with router and connection setup.' },
    ],
    tools: ['TradingView', 'MetaTrader', 'Microsoft Excel', 'Broker platforms', 'Browser-based terminals'],
    tiers: [
      { name: 'Dual-Monitor Setup', forWho: 'Part-time traders, analysts', direction: ['Modern 6-core CPU', '16 GB RAM', 'GPU / iGPU with 2+ outputs', '512 GB – 1 TB SSD'] },
      { name: 'Multi-Monitor Workstation', forWho: 'Full-time traders, 3–4 screens', direction: ['8-core CPU', '32 GB RAM', 'GPU with 4 outputs', '1 TB SSD', 'UPS'] },
      { name: 'Analyst Workstation', forWho: 'Heavy spreadsheets, research, 4–6 screens', direction: ['Fast multi-core CPU', '32–64 GB RAM', 'Multi-output GPU(s)', 'Reliable storage + backup'] },
    ],
    considerations: [
      'Tell us the number and resolution of monitors you want – this decides the graphics setup.',
      'We focus on stability, cooling and silence for long working hours.',
      'Ergonomics matter: monitor arms and placement are worth planning.',
    ],
    upgrades: ['Add more monitors later', 'RAM upgrade path', 'Second SSD for data/backups'],
    note: 'A faster PC helps you work comfortably. It does not improve trading results – we never promise any trading advantage.',
    faqs: [
      { question: 'How many monitors can one PC run?', answer: 'It depends on the graphics card outputs. Most modern GPUs support 3–4 displays; more is possible with the right setup.' },
      { question: 'Do I need a powerful graphics card for trading?', answer: 'No. You need enough display outputs and stable drivers, not gaming power.' },
      { question: 'Will a better PC improve my trading?', answer: 'No. It only makes your tools smoother and more reliable to use.' },
    ],
    seo: {
      title: 'Trading PC & Multi-Monitor Workstation in Madurai – JSPCS',
      description: 'Reliable trading PCs and multi-monitor workstations for TradingView, MetaTrader and analysis. Display planning, UPS and network setup in Madurai.',
      keywords: ['trading pc build madurai', 'multi monitor pc', 'stock trading computer', 'tradingview pc setup', 'analyst workstation'],
    },
  },

  // ── 5. AI & Machine Learning ─────────────────────────────────────────────
  {
    slug: 'ai-machine-learning-workstation',
    inquiryKey: 'AI / Machine Learning',
    title: 'AI & Machine Learning Workstation',
    shortTitle: 'AI & Machine Learning',
    icon: 'brain',
    image: '/img/lookbook/category-ai.webp',
    tagline: 'GPU memory first – then everything else.',
    summary:
      'For AI work, the amount of GPU memory (VRAM) decides which models you can run and how large your batches can be. We plan around your models and frameworks, and we are honest about what each GPU can and cannot handle.',
    audience: ['AI developers', 'ML learners & students', 'Researchers', 'Data scientists', 'Local AI / LLM enthusiasts'],
    useCases: ['Model experiments', 'Local LLM inference', 'Deep learning training', 'CUDA workloads', 'AI image generation', 'Data processing'],
    priorities: [
      { part: 'GPU VRAM', why: 'Sets the limit on model size. Larger language and image models need more VRAM to run fully on the GPU.' },
      { part: 'CUDA support', why: 'Most ML frameworks are best supported on NVIDIA GPUs with CUDA. We check driver and framework compatibility.' },
      { part: 'System RAM', why: 'Datasets and pre-processing need memory – usually at least as much as the GPU, ideally more.' },
      { part: 'Fast NVMe storage', why: 'Models and datasets are large. Fast storage speeds up loading and experiments.' },
      { part: 'Power & cooling', why: 'GPUs run at full load for hours. A quality PSU and good airflow are essential.' },
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'Ollama', 'Hugging Face', 'Jupyter', 'Stable Diffusion-based tools'],
    tiers: [
      { name: 'Beginner AI Workstation', forWho: 'Learning ML, small models, notebooks', direction: ['8-core CPU', '32 GB RAM', 'NVIDIA GPU with moderate VRAM', '1 TB NVMe'] },
      { name: 'Intermediate GPU Workstation', forWho: 'Fine-tuning small models, local LLMs, image generation', direction: ['8–16 core CPU', '64 GB RAM', 'NVIDIA GPU with high VRAM', '2 TB NVMe', 'Strong PSU & cooling'] },
      { name: 'Advanced GPU Workstation', forWho: 'Research, larger models, multi-GPU planning', direction: ['High core-count CPU', '128 GB+ RAM', 'Top-tier / multiple GPUs', 'Large fast storage', 'Workstation-grade PSU & airflow'] },
    ],
    considerations: [
      'Tell us which models or frameworks you want to run – VRAM needs vary a lot.',
      'Very large models may not fit on a single consumer GPU, even a high-end one. We explain these limits before you buy.',
      'Multi-GPU builds need the right motherboard, case, power and cooling – plan them early.',
    ],
    upgrades: ['PSU and case sized for a bigger GPU', 'RAM expansion slots', 'Extra NVMe for datasets'],
    note: 'What you can run depends mainly on GPU memory. We will tell you honestly if a workload needs more than the budget allows.',
    faqs: [
      { question: 'How much VRAM do I need for local LLMs?', answer: 'It depends on the model size and format. Smaller models run on modest GPUs; larger ones need much more VRAM or will run slower using system memory. Share the models you want and we will advise.' },
      { question: 'NVIDIA or AMD for machine learning?', answer: 'NVIDIA with CUDA has the widest framework support today, so it is usually the safer choice for ML.' },
      { question: 'Can you set up PyTorch and CUDA for me?', answer: 'Yes. We can install drivers, CUDA, Python environments and check that your framework detects the GPU.' },
    ],
    seo: {
      title: 'AI & Machine Learning Workstation Build in Madurai – JSPCS',
      description: 'Custom AI and deep learning workstations with the right GPU VRAM for PyTorch, TensorFlow, Ollama and Stable Diffusion. Beginner to advanced builds in Madurai.',
      keywords: ['ai workstation madurai', 'machine learning pc build', 'deep learning pc india', 'local llm pc', 'cuda workstation'],
    },
  },

  // ── 6. Architecture, CAD & 3D ────────────────────────────────────────────
  {
    slug: 'architecture-cad-3d-rendering-pc',
    inquiryKey: 'Architecture / CAD',
    title: 'Architecture, CAD & 3D Rendering PC',
    shortTitle: 'Architecture & CAD',
    icon: 'ruler',
    image: '/img/lookbook/category-cad.webp',
    tagline: 'Smooth models, faster renders, reliable deadlines.',
    summary:
      'AutoCAD, Revit, SketchUp, Lumion and V-Ray all use hardware differently. Some depend on single-core CPU speed, others on the GPU, others on many CPU cores. We build around the software you actually use.',
    audience: ['Architects', 'Architecture students', 'Civil engineers', 'Interior designers', '3D artists', 'BIM professionals'],
    useCases: ['2D CAD drafting', 'BIM modelling', '3D modelling', 'Rendering & visualisation', 'Real-time walkthroughs', 'Large project files'],
    priorities: [
      { part: 'CPU single-core speed', why: 'Modelling in AutoCAD, Revit and SketchUp is mostly single-threaded – a fast CPU keeps the model responsive.' },
      { part: 'CPU core count', why: 'CPU renderers (like V-Ray CPU) finish faster with more cores.' },
      { part: 'GPU & VRAM', why: 'Real-time tools such as Lumion, Enscape and Twinmotion depend heavily on the GPU and its memory.' },
      { part: 'RAM', why: 'Large BIM projects and high-resolution textures need 32–64 GB or more.' },
      { part: 'Storage', why: 'Fast NVMe for active projects, plus larger storage and backups for archives.' },
      { part: 'Display', why: 'A larger, sharp monitor makes detailed drawing work much easier.' },
    ],
    tools: ['AutoCAD', 'Revit', 'SketchUp', 'Lumion', 'Enscape', 'V-Ray', 'Blender', '3ds Max', 'Twinmotion', 'Rhino', 'Navisworks'],
    tiers: [
      { name: 'CAD & 2D Design', forWho: 'Drafting, 2D drawings', direction: ['Fast 6-core CPU', '16–32 GB RAM', 'Entry GPU', '1 TB NVMe'] },
      { name: 'Architecture Student', forWho: 'College projects across CAD, SketchUp, Lumion', direction: ['Fast 6–8 core CPU', '32 GB RAM', 'Mid-range GPU', '1 TB NVMe'] },
      { name: '3D Modelling', forWho: 'SketchUp, Rhino, Blender, 3ds Max', direction: ['Fast 8-core CPU', '32 GB RAM', 'Capable GPU', 'Fast NVMe'] },
      { name: 'BIM Workstation', forWho: 'Revit / Navisworks on large projects', direction: ['High-clock CPU', '64 GB RAM', 'Good GPU', 'NVMe + backup storage'] },
      { name: 'Heavy Rendering Workstation', forWho: 'Lumion, Enscape, V-Ray, Twinmotion', direction: ['High core-count CPU', 'High-VRAM GPU', '64 GB+ RAM', 'Strong cooling & PSU'] },
    ],
    considerations: [
      'Tell us your main software and typical project size – it changes the right build completely.',
      'GPU rendering and CPU rendering need different parts. Many studios use both.',
      'Check the recommended specs of your software version – we help you read them.',
    ],
    upgrades: ['RAM expansion for bigger projects', 'GPU upgrade for real-time rendering', 'Extra storage for archives'],
    faqs: [
      { question: 'Is a gaming graphics card OK for AutoCAD and Revit?', answer: 'For most users, yes. Certified workstation GPUs are mainly needed for specific enterprise workflows. We advise based on your software.' },
      { question: 'Lumion or Enscape – what matters most?', answer: 'The GPU and its VRAM. Large scenes with many textures need more VRAM.' },
      { question: 'What PC should an architecture student buy?', answer: 'A balanced build with a fast CPU, 32 GB RAM and a mid-range GPU handles most college workflows and can be upgraded later.' },
    ],
    seo: {
      title: 'Architecture & CAD PC Build in Madurai | Revit, Lumion, V-Ray – JSPCS',
      description: 'Custom PCs for architects, civil engineers and interior designers. Built for AutoCAD, Revit, SketchUp, Lumion, Enscape and V-Ray rendering in Madurai.',
      keywords: ['architecture pc build madurai', 'autocad pc', 'revit workstation', 'lumion pc build', 'rendering workstation india'],
    },
  },

  // ── 7. GIS & Geospatial ──────────────────────────────────────────────────
  {
    slug: 'gis-geospatial-workstation',
    inquiryKey: 'GIS',
    title: 'GIS & Geospatial Workstation',
    shortTitle: 'GIS & Geospatial',
    icon: 'map',
    image: '/img/lookbook/category-gis.webp',
    tagline: 'Built for big maps, big rasters and big datasets.',
    summary:
      'GIS work is about handling large data – satellite imagery, rasters and spatial layers. That needs a different balance of CPU, RAM and storage than a gaming PC. We plan around ArcGIS Pro, QGIS and your data sizes.',
    audience: ['GIS professionals', 'Geography & geomatics students', 'Survey & mapping professionals', 'Remote sensing users', 'Geospatial analysts'],
    useCases: ['GIS mapping', 'Spatial data processing', 'Raster analysis', 'Satellite imagery', 'Large datasets', '3D geospatial visualisation'],
    priorities: [
      { part: 'CPU', why: 'Many geoprocessing tools rely on fast cores; some tools use multiple cores for batch processing.' },
      { part: 'RAM', why: 'Large rasters and datasets need plenty of memory. 32 GB is a good start; 64 GB+ for heavy imagery work.' },
      { part: 'Fast SSD', why: 'Reading and writing big files is constant in GIS. NVMe SSDs make a real difference.' },
      { part: 'GPU', why: 'ArcGIS Pro uses the GPU for 2D/3D display and some analysis. A dedicated GPU with reasonable VRAM helps.' },
      { part: 'Data storage', why: 'Plan bulk storage and backups for imagery archives and project data.' },
    ],
    tools: ['ArcGIS Pro', 'ArcGIS', 'QGIS', 'GDAL', 'Global Mapper', 'ENVI', 'Google Earth Pro'],
    tiers: [
      { name: 'GIS Student / Starter', forWho: 'QGIS, coursework, small projects', direction: ['6-core CPU', '16–32 GB RAM', 'Entry dedicated GPU', '1 TB NVMe'] },
      { name: 'Professional GIS Workstation', forWho: 'Daily ArcGIS Pro / QGIS work', direction: ['Fast 8-core CPU', '32–64 GB RAM', 'Mid-range GPU', 'NVMe + large data drive'] },
      { name: 'Remote Sensing Workstation', forWho: 'Satellite imagery, large rasters', direction: ['High core-count CPU', '64–128 GB RAM', 'Capable GPU', 'Multiple fast drives + backup'] },
    ],
    considerations: [
      'Tell us your software and typical dataset sizes – this matters more than anything else.',
      'Check ArcGIS Pro system requirements for your version; we help match them.',
      'Keep active projects on NVMe and archives on larger drives.',
    ],
    upgrades: ['RAM expansion for bigger rasters', 'More storage for imagery archives', 'GPU upgrade for 3D scenes'],
    faqs: [
      { question: 'Can I use a gaming PC for ArcGIS Pro?', answer: 'Often yes, but GIS usually needs more RAM and storage than a typical gaming build. We tune the balance for GIS.' },
      { question: 'How much RAM for GIS work?', answer: '32 GB for most professional work; 64 GB or more if you process large satellite imagery or rasters.' },
      { question: 'Is QGIS lighter than ArcGIS Pro?', answer: 'QGIS generally runs on more modest hardware, but large datasets still benefit from more RAM and fast storage.' },
    ],
    seo: {
      title: 'GIS Workstation Build in Madurai | ArcGIS Pro & QGIS PC – JSPCS',
      description: 'Custom GIS and geospatial workstations for ArcGIS Pro, QGIS, ENVI and remote sensing. RAM, storage and GPU planned for large datasets in Madurai.',
      keywords: ['gis workstation madurai', 'arcgis pro pc', 'qgis computer', 'remote sensing workstation', 'geospatial pc build'],
    },
  },

  // ── 8. Server, NAS & Virtualisation ──────────────────────────────────────
  {
    slug: 'server-nas-virtualization-pc',
    inquiryKey: 'Server / Virtualization',
    title: 'Server, NAS & Virtualisation PC',
    shortTitle: 'Server, NAS & Homelab',
    icon: 'server',
    image: '/img/lookbook/category-server.webp',
    tagline: 'Always-on systems for files, VMs and labs.',
    summary:
      'Servers and NAS boxes run 24 hours a day, so reliability, power efficiency and data safety come first. We plan cores, RAM, storage layout and backups for your exact use – file sharing, VMs, containers or a learning lab.',
    audience: ['Small businesses', 'Developers', 'IT administrators', 'Homelab enthusiasts', 'Networking learners'],
    useCases: ['Virtualisation', 'Linux & Windows servers', 'NAS & file sharing', 'Containers', 'Testing labs', 'Local hosting'],
    priorities: [
      { part: 'CPU cores', why: 'More cores let you run more VMs and containers at once.' },
      { part: 'RAM (and ECC where supported)', why: 'Each VM needs its own memory. ECC memory adds protection against data errors on supported platforms.' },
      { part: 'Storage layout', why: 'We plan drives, RAID/mirroring and file systems for your needs – and explain the limits.' },
      { part: 'Backups', why: 'RAID is not a backup. A separate backup copy is essential for important data.' },
      { part: 'Networking', why: 'Wired gigabit (or faster) networking matters for file transfers and VM access.' },
      { part: 'Power efficiency', why: 'An always-on machine should use as little power as practical. A UPS is strongly recommended.' },
    ],
    tools: ['Proxmox', 'VMware', 'Hyper-V', 'TrueNAS', 'Docker', 'Linux', 'Windows Server', 'Kubernetes labs'],
    tiers: [
      { name: 'Homelab PC', forWho: 'Learning, self-hosting, home services', direction: ['Efficient multi-core CPU', '32 GB RAM', 'SSD + data drives', 'Low idle power'] },
      { name: 'NAS / Storage Server', forWho: 'File sharing & backups for home or office', direction: ['Efficient CPU', '16–32 GB RAM (ECC if supported)', 'Multiple drive bays', 'Mirrored drives + backup plan'] },
      { name: 'Virtualisation Lab', forWho: 'Proxmox / VMware / Hyper-V labs', direction: ['High core-count CPU', '64 GB+ RAM', 'Fast NVMe for VMs', 'Multiple network ports'] },
      { name: 'Small Business Server', forWho: 'Office file server, apps, user accounts', direction: ['Reliable server-friendly platform', 'ECC RAM where possible', 'Redundant storage', 'UPS + off-site backup'] },
    ],
    considerations: [
      'RAID protects against a drive failure – not against deletion, ransomware or theft. Always keep a separate backup.',
      'ECC memory needs a compatible CPU and motherboard; we check this before recommending it.',
      'Noise and heat matter if the server sits in an office or home.',
    ],
    upgrades: ['Spare drive bays for expansion', 'RAM slots for more VMs', 'Network card upgrade (2.5G / 10G)'],
    faqs: [
      { question: 'Is RAID enough to keep my data safe?', answer: 'No. RAID helps if a drive fails, but you still need a separate backup to protect against deletion, ransomware or damage.' },
      { question: 'Proxmox or TrueNAS – which should I use?', answer: 'Proxmox is focused on VMs and containers; TrueNAS is focused on storage. Some setups use both. We help you choose.' },
      { question: 'Do I need ECC memory?', answer: 'It is recommended for important always-on storage, but it needs compatible hardware. We explain the options for your budget.' },
    ],
    seo: {
      title: 'Server, NAS & Homelab PC Build in Madurai | Proxmox, TrueNAS – JSPCS',
      description: 'Custom servers, NAS boxes and virtualisation labs for Proxmox, TrueNAS, VMware, Hyper-V and Docker. Storage, backup and network planning in Madurai.',
      keywords: ['nas build madurai', 'homelab pc', 'proxmox server build', 'small business server tamil nadu', 'truenas build'],
    },
  },

  // ── 9. Custom & Special Purpose ──────────────────────────────────────────
  {
    slug: 'custom-special-purpose-pc',
    inquiryKey: 'Multiple Workloads',
    title: 'Custom & Special Purpose Builds',
    shortTitle: 'Custom & Special Builds',
    icon: 'sparkles',
    image: '/img/lookbook/category-custom.webp',
    tagline: 'Tell us what you need – we will plan your build.',
    summary:
      'Not every build fits a category. Maybe you want a silent PC, an all-white build, a compact system, a work-plus-gaming machine, or you just want to upgrade what you already have. Tell us and we will plan it with you.',
    audience: ['Anyone with a specific budget', 'Upgrade-only customers', 'Mixed work + gaming users', 'Style-focused builders'],
    useCases: ['Specific budget builds', 'Reusing existing parts', 'Upgrade-only plans', 'Compact / small-form-factor PCs', 'Silent PCs', 'White or RGB themed builds', 'Work + gaming combos'],
    priorities: [
      { part: 'Your priorities', why: 'Silence, size, looks, performance or budget – we start with what matters most to you.' },
      { part: 'Compatibility', why: 'Small cases, existing parts and themed builds need careful compatibility checks.' },
      { part: 'Cooling', why: 'Compact and silent builds need smart cooling choices.' },
      { part: 'Balance', why: 'Mixed workloads need a build that handles each task well without overspending.' },
    ],
    tools: ['Whatever you use – tell us your apps and games'],
    tiers: [
      { name: 'Budget-First Build', forWho: 'A fixed budget, maximum value', direction: ['Parts chosen to fit your exact budget'] },
      { name: 'Upgrade My Existing PC', forWho: 'Keep what works, replace what holds you back', direction: ['Bottleneck check', 'Compatible upgrades only'] },
      { name: 'Compact / SFF PC', forWho: 'Small desks, LAN setups, living rooms', direction: ['Small-form-factor case', 'Carefully matched cooling & PSU'] },
      { name: 'Silent PC', forWho: 'Studios, bedrooms, offices', direction: ['Low-noise fans & cooler', 'Efficient parts', 'Sound-friendly case'] },
      { name: 'White / RGB Themed', forWho: 'Style-focused builds', direction: ['Matching theme parts', 'Clean cable management'] },
      { name: 'Work + Gaming', forWho: 'One PC for both', direction: ['Balanced CPU + GPU', 'Enough RAM for work apps'] },
    ],
    considerations: [
      'Share photos or specs of any parts you want to reuse.',
      'Small and silent builds have trade-offs – we explain them honestly.',
      'Themed builds may cost a little more for matching parts.',
    ],
    upgrades: ['Planned upgrade path from day one'],
    faqs: [
      { question: 'Can I bring my own parts?', answer: 'Yes. We check compatibility and condition, then build with them.' },
      { question: 'Can you build a silent PC?', answer: 'Yes. We choose low-noise cooling, efficient parts and a suitable case.' },
      { question: 'I am not sure what I need. Can you help?', answer: 'That is what we are here for. Tell us what you do on the PC and your budget – we will suggest options.' },
    ],
    seo: {
      title: 'Custom PC Build in Madurai | Silent, Compact, White & RGB PCs – JSPCS',
      description: 'Custom PCs for any need – budget builds, upgrades, compact SFF, silent, white or RGB themed and work + gaming PCs. Tell us what you need in Madurai.',
      keywords: ['custom pc build madurai', 'silent pc build', 'small form factor pc', 'white pc build', 'pc upgrade madurai'],
    },
  },
]

export function getBuildCategory(slug: string): BuildCategory | undefined {
  return BUILD_CATEGORIES.find(c => c.slug === slug)
}

/** Options for the guided build inquiry (step 1). */
export const BUILD_PURPOSES = [
  'Gaming',
  'Video Editing',
  'Software Development',
  'Architecture / CAD',
  'AI / Machine Learning',
  'Trading',
  'GIS',
  'Server / Virtualization',
  'General Use',
  'Multiple Workloads',
] as const

/** Photos from the existing /public/pc build folder (optimised copies). */
export const BUILD_GALLERY = [
  { title: 'Apex Esports 240Hz Rig', src: '/img/lookbook/category-gaming.webp', tag: 'RTX 4080 Super • i7-14700K' },
  { title: '8K DaVinci Video Studio', src: '/img/lookbook/category-creator.webp', tag: '64GB DDR5 • RTX 4070 Ti Super' },
  { title: 'Full-Stack DevOps Workstation', src: '/img/lookbook/category-developer.webp', tag: 'Ryzen 9 7900X • 64GB RAM' },
  { title: 'Quad-Display Trading Desk', src: '/img/lookbook/category-trading.webp', tag: 'Silent Acoustic • 4x 4K Displays' },
  { title: 'Local LLM & CUDA AI Lab', src: '/img/lookbook/category-ai.webp', tag: 'RTX 4090 24GB • NVMe Gen5' },
  { title: 'Revit & Lumion BIM Rig', src: '/img/lookbook/category-cad.webp', tag: 'Fast Single-Core • RTX 4070' },
  { title: 'GIS & Big Raster Workstation', src: '/img/lookbook/category-gis.webp', tag: '128GB RAM • High-TBW NVMe' },
  { title: '24/7 TrueNAS Homelab Server', src: '/img/lookbook/category-server.webp', tag: 'ECC Memory • 8-Bay ZFS' },
]
