var config = {
    style: 'mapbox://styles/keimodi/clshoh8rj007501qu8g962ou0',
    accessToken: 'pk.eyJ1Ijoia2VpbW9kaSIsImEiOiJjbHMxN2h5Y3EwOG9kMmxtdDZsMTMyZ2p6In0.IQwGswv3WAOl06WclkOCKg',
    showMarkers: true,
    markerColor: '#B1CE3F',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'My Hiking Experience',
    subtitle: 'Where we go hiking in Singapore?',
    byline: 'By Carrey He',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Three most impressive hiking trails in Singapore',
            image: 'images/On the way.jpg',
            description: 'As the Garden City, Singapore offers citizens plenty of opportunities to get in touch with nature and wildlife in highly built urban spaces. Three hiking trails are most impressive - Railway Corridor / MacRitChie Reservoir / Southern Ridges',
            location: {
                center: [103.80059, 1.33564],
                zoom: 12,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Railway Corridor',
            image: 'images/Railway.jpg',
            audio: 'images/Railway.mp3',
            description: 'Trail was enjoyable partly shaded, paved and well maintained. I went on a Sunday morning. Saw many birds and wildlife.',
            location: {
                center: [103.78120, 1.33412],
                zoom: 15.55,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MacRitChie Reservoir and TreeTop Walk Loop ',
            image: 'images/MacRitChie.jpg',
            description: 'Incredibly beautiful walk in the "city". lt is remarkable how were the locals able to preserve this piece of wild nature with all its habitants.The trail itself is relatively easy, with some short challenging areas consisting of stairs and relatively steeproads. lt is muddy, sandy, rocky, paved and everything in between, the only constant element being water... it is wet throughout. At this time of the year, proper shoes and a lot of water to drink are highly recommended. Other than that, one can immerse itself in the luscious greenery and admire the wildlife that is happy to interact with anyone passing by.',
            location: {
                center: [103.82260, 1.34523],
                zoom: 14,
                pitch: 70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Southern Ridges Trail',
            image: 'images/Henderson Wave.jpg',
            description: 'A walk along the Southern Ridges trail is a safe and inexpensive way to escape the city’s hustle and bustle and enjoy the pristine jungle. Most of the trail is paved and cemented, making it one of the easiest hikes around - perfect for families with children, couples, nature enthusiasts, photographers, and solo travellers. The winding pathways present a unique mélange of Singapore’s futuristic buildings and untouched greenery – picture-perfect moments aplenty!',
            location: {
                center: [103.81543, 1.27599],
                zoom: 14,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
