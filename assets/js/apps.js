const Apps = {

    sport: {
        id: "sport",
        name: "Sport Checklist",
        status: "available",
        themeColor: "#EF5350",
        seo: {
            image: "assets/images/sport/sportchecklist_logo.png",
            url: "sport.html"
        },
        header: "assets/images/sport/sportchecklist_header.png",
        logo: "assets/images/sport/sportchecklist_logo.png",
        icon: "assets/images/sport/sportchecklist_icon.png",
        playStore: "https://play.google.com/store/apps/details?id=com.matteosteri.sportchecklist",
        webApp: "https://sport.app-checklist.com",
        screenshots: [
            "assets/images/sport/sport_1.png",
            "assets/images/sport/sport_4.png",
            "assets/images/sport/sport_6.png",
            "assets/images/sport/sport_2.png"
        ],
        relatedApps: ["trip", "shop"]
    },


    trip: {
        id: "trip",
        name: "Trip Checklist",
        status: "available",
        themeColor: "#1976D2",
        seo: {
            image: "assets/images/trip/tripchecklist_logo.png",
            url: "trip.html"
        },
        header: "assets/images/trip/tripchecklist_header.png",
        logo: "assets/images/trip/tripchecklist_logo.png",
        icon: "assets/images/trip/tripchecklist_icon.png",
        playStore: "https://play.google.com/store/apps/details?id=com.matteosteri.tripchecklist",
        webApp: "https://trip.app-checklist.com",
        screenshots: [
            "assets/images/trip/trip_1.png",
            "assets/images/trip/trip_4.png",
            "assets/images/trip/trip_6.png",
            "assets/images/trip/trip_2.png"
        ],
        relatedApps: ["sport", "shop"],
    },


    shop: {
        id: "shop",
        name: "Shop Checklist",
        status: "coming_soon",
        themeColor: "#43A047",
        seo: {
            image: "assets/images/shop/shopchecklist_logo.png",
            url: "shop.html"
        },
        header: "assets/images/shop/shopchecklist_header.png",
        logo: "assets/images/shop/shopchecklist_logo.png",
        icon: "assets/images/shop/shopchecklist_icon.png",
        playStore: "#",
        webApp: "https://shop.app-checklist.com",
        screenshots: [],
        relatedApps: ["sport", "trip"]
    }

};