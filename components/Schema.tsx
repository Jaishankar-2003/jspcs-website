export default function Schema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",

        name: "JSPCS Online",

        url: "https://jspcs.online",

        logo: "https://jspcs.online/logo.png",

        image: "https://jspcs.online/logo.png",

        description:
            "Laptop repair, PC repair, chip-level servicing, custom gaming PC builds, and computer AMC services across Tamil Nadu.",

        areaServed: [
            "Chennai",
            "Madurai",
            "Tamil Nadu"
        ],

        address: {
            "@type": "PostalAddress",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
        },

        makesOffer: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Laptop Repair",
                },
            },

            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Desktop Repair",
                },
            },

            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Chip-Level Service",
                },
            },

            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Custom Gaming PC Build",
                },
            },
        ],
        // serviceType: [
        //     "Laptop Repair",
        //     "Desktop Repair",
        //     "Chip-Level Service",
        //     "Custom PC Build",
        //     "Gaming PC Service",
        //     "AMC Services",
        // ],

        sameAs: [
            "https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw==",
            "https://www.facebook.com/shankar.jai.961",
            "https://www.linkedin.com/in/jai-shankar-pc-services-59a21a27b"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    )
}