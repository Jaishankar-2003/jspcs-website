import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()
    const baseUrl = 'https://jspcs.online'
    
    const coreRoutes = [
        '',
        '/laptop-service-center-in-madurai',
        '/computer-service-center-in-madurai',
        '/chip-level-service-in-madurai',
        '/custom-gaming-pc-build-in-madurai',
        '/desktop-repair-service-in-madurai',
    ]

    const brandRepairRoutes = [
        '/dell-laptop-repair-madurai',
        '/hp-laptop-repair-madurai',
        '/lenovo-laptop-repair-madurai',
        '/asus-laptop-repair-madurai',
        '/acer-laptop-repair-madurai',
        '/msi-gaming-laptop-repair-madurai',
    ]

    const technicalServiceRoutes = [
        '/gaming-laptop-repair-madurai',
        '/motherboard-repair-madurai',
        '/ssd-upgrade-service-madurai',
        '/ram-upgrade-service-madurai',
        '/laptop-heating-issue-repair-madurai',
        '/gpu-repair-service-madurai',
        '/thermal-paste-service-madurai',
        '/laptop-screen-replacement-madurai',
        '/laptop-keyboard-repair-madurai',
        '/laptop-hinge-repair-madurai',
        '/windows-installation-service-madurai',
        '/data-recovery-service-madurai',
        '/computer-amc-service-madurai',
        '/business-it-support-madurai',
    ]

    const pcBuildRoutes = [
        '/workstation-pc-build-madurai',
        '/rgb-gaming-pc-build-madurai',
        '/budget-gaming-pc-build-madurai',
    ]

    const blogRoutes = [
        '/blog/best-gaming-pc-build-under-50000',
        '/blog/how-to-fix-laptop-overheating',
        '/blog/laptop-motherboard-repair-vs-replacement',
        '/blog/windows-11-vs-windows-10-performance',
        '/blog/ssd-vs-hdd-performance-comparison',
    ]

    const allRoutes = [
        ...coreRoutes.map(route => ({ url: `${baseUrl}${route}`, priority: route === '' ? 1 : 0.9 })),
        ...brandRepairRoutes.map(route => ({ url: `${baseUrl}${route}`, priority: 0.8 })),
        ...technicalServiceRoutes.map(route => ({ url: `${baseUrl}${route}`, priority: 0.8 })),
        ...pcBuildRoutes.map(route => ({ url: `${baseUrl}${route}`, priority: 0.8 })),
        ...blogRoutes.map(route => ({ url: `${baseUrl}${route}`, priority: 0.7 })),
    ]

    return allRoutes.map(route => ({
        url: route.url,
        lastModified,
        changeFrequency: route.priority >= 0.9 ? 'weekly' : 'monthly',
        priority: route.priority,
    }))
}