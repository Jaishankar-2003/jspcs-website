import { 
  Laptop, 
  Cpu, 
  HardDrive, 
  Thermometer, 
  Monitor, 
  Keyboard, 
  Settings, 
  Database, 
  ShieldCheck, 
  Briefcase, 
  Gamepad2, 
  Lightbulb, 
  Wrench,
  Layers,
  ChevronRight,
  Zap,
  Building2,
  Clock,
  BookOpen,
  Apple,
  Dna
} from 'lucide-react'

export interface NavRoute {
  href: string
  label: string
  icon: any
  description?: string
  category: 'Brand' | 'Technical' | 'PC Build' | 'Blog' | 'Core'
}

export const brandRepairRoutes: NavRoute[] = [
  { href: '/dell-laptop-repair-madurai', label: 'Dell Repair', icon: Laptop, category: 'Brand', description: 'Alienware, XPS, Inspiron, Vostro specialists' },
  { href: '/hp-laptop-repair-madurai', label: 'HP Repair', icon: Laptop, category: 'Brand', description: 'Omen, Victus, Pavilion, EliteBook service' },
  { href: '/lenovo-laptop-repair-madurai', label: 'Lenovo Repair', icon: Laptop, category: 'Brand', description: 'Legion, ThinkPad, Yoga, IdeaPad repair' },
  { href: '/asus-laptop-repair-madurai', label: 'Asus Repair', icon: Laptop, category: 'Brand', description: 'ROG, TUF, ZenBook, VivoBook expert service' },
  { href: '/acer-laptop-repair-madurai', label: 'Acer Repair', icon: Laptop, category: 'Brand', description: 'Predator, Nitro, Aspire, Swift repair' },
  { href: '/msi-gaming-laptop-repair-madurai', label: 'MSI Repair', icon: Gamepad2, category: 'Brand', description: 'Katana, Raider, Stealth, Titan specialists' },
]

export const technicalServiceRoutes: NavRoute[] = [
  { href: '/gaming-laptop-repair-madurai', label: 'Gaming Laptop', icon: Gamepad2, category: 'Technical', description: 'Thermal service & FPS optimization' },
  { href: '/motherboard-repair-madurai', label: 'Motherboard Repair', icon: Cpu, category: 'Technical', description: 'Advanced chip-level board repair' },
  { href: '/ssd-upgrade-service-madurai', label: 'SSD Upgrade', icon: HardDrive, category: 'Technical', description: 'NVMe & SATA SSD installation' },
  { href: '/ram-upgrade-service-madurai', label: 'RAM Upgrade', icon: Zap, category: 'Technical', description: 'DDR4/DDR5 memory expansion' },
  { href: '/laptop-heating-issue-repair-madurai', label: 'Heating Fix', icon: Thermometer, category: 'Technical', description: 'Deep cleaning & thermal repasting' },
  { href: '/gpu-repair-service-madurai', label: 'GPU Repair', icon: Settings, category: 'Technical', description: 'Graphics card BGA reballing' },
  { href: '/thermal-paste-service-madurai', label: 'Thermal Service', icon: Thermometer, category: 'Technical', description: 'Kryonaut & Liquid Metal application' },
  { href: '/laptop-screen-replacement-madurai', label: 'Screen Replace', icon: Monitor, category: 'Technical', description: 'LED, IPS, OLED panel replacement' },
  { href: '/laptop-keyboard-repair-madurai', label: 'Keyboard Repair', icon: Keyboard, category: 'Technical', description: 'Backlit & mechanical keyboard fix' },
  { href: '/laptop-hinge-repair-madurai', label: 'Hinge Repair', icon: Wrench, category: 'Technical', description: 'Structural lid & hinge restoration' },
  { href: '/windows-installation-service-madurai', label: 'OS Installation', icon: ShieldCheck, category: 'Technical', description: 'Windows 11/10 clean install' },
  { href: '/data-recovery-service-madurai', label: 'Data Recovery', icon: Database, category: 'Technical', description: 'HDD, SSD & SD card recovery' },
  { href: '/computer-amc-service-madurai', label: 'Computer AMC', icon: Clock, category: 'Technical', description: 'Annual maintenance for business' },
  { href: '/business-it-support-madurai', label: 'IT Support', icon: Building2, category: 'Technical', description: 'Office network & server support' },
]

export const pcBuildRoutes: NavRoute[] = [
  { href: '/workstation-pc-build-madurai', label: 'Workstation PC', icon: Briefcase, category: 'PC Build', description: 'Video editing & 3D rendering rigs' },
  { href: '/rgb-gaming-pc-build-madurai', label: 'RGB Gaming PC', icon: Lightbulb, category: 'PC Build', description: 'Stunning ARGB custom builds' },
  { href: '/budget-gaming-pc-build-madurai', label: 'Budget Gaming PC', icon: Gamepad2, category: 'PC Build', description: 'Max FPS per Rupee builds' },
]

export const blogRoutes: NavRoute[] = [
  { href: '/blog/best-gaming-pc-build-under-50000', label: '50k PC Build', icon: BookOpen, category: 'Blog' },
  { href: '/blog/how-to-fix-laptop-overheating', label: 'Heating Fix Guide', icon: BookOpen, category: 'Blog' },
  { href: '/blog/laptop-motherboard-repair-vs-replacement', label: 'Motherboard Guide', icon: BookOpen, category: 'Blog' },
  { href: '/blog/windows-11-vs-windows-10-performance', label: 'Windows 11 vs 10', icon: BookOpen, category: 'Blog' },
  { href: '/blog/ssd-vs-hdd-performance-comparison', label: 'SSD vs HDD', icon: BookOpen, category: 'Blog' },
]

export const allNavRoutes = [
  ...brandRepairRoutes,
  ...technicalServiceRoutes,
  ...pcBuildRoutes,
  ...blogRoutes,
]
