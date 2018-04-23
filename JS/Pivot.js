window.DxSample = {};
$(function () {
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: DxSample,
        defaultLayout: 'default'
    });

    DxSample.app.router.register(":view/:name", { view: "home", name: "" });
    DxSample.app.navigate("home");
});

DxSample.home = function () {
    var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        { name: "Michael A. Blevins", phone: "530-480-1961", email: "MichaelABlevins@armyspy.com", category: "Favorites" },
        { name: "Jane K. Hernandez", phone: "404-781-0805", email: "JaneKHernandez@teleworm.us", category: "Friends" },
        { name: "Kim D. Thomas", phone: "603-583-9043", email: "KimDThomas@teleworm.us", category: "Work" },
        { name: "Angel H. Padgett", phone: "772-766-2842", email: "AngelHPadgett@jourrapide.com", category: "Family" },
        { name: "Donald L. Jordan", phone: "213-812-8400", email: "DonaldLJordan@dayrep.com", category: "Friends" },
        { name: "Barbara M. Roberts", phone: "614-365-7945", email: "BarbaraMRoberts@armyspy.com", category: "Friends" },
        { name: "Leslie S. Alcantara", phone: "313-881-9719", email: "LeslieSAlcantara@teleworm.us", category: "Work" },
        { name: "Chad S. Miles", phone: "269-718-9780", email: "ChadSMiles@rhyta.com", category: "Friends" },
        { name: "Sherryl C. Flowers", phone: "919-469-3285", email: "SherrylCFlowers@armyspy.com", category: "Friends" },
        { name: "Merle L. Stearns", phone: "213-995-1064", email: "MerleLStearns@jourrapide.com", category: "Friends" },
        { name: "Nicole A. Rios", phone: "240-416-4329", email: "NicoleARios@armyspy.com", category: "Friends" },
        { name: "James L. Parker", phone: "949-265-2198", email: "JamesLParker@teleworm.us", category: "Friends" },
        { name: "Erin G. Goodson", phone: "425-208-5408", email: "ErinGGoodson@rhyta.com", category: "Friends" },
        { name: "Lelia J. Stewart", phone: "580-302-0390", email: "LeliaJStewart@rhyta.com", category: "Family" },
        { name: "Debra B. Abbott", phone: "806-675-3359", email: "DebraBAbbott@jourrapide.com", category: "Work" },
        { name: "Sandra M. Perez", phone: "586-920-6315", email: "SandraMPerez@dayrep.com", category: "Friends" },
        { name: "Elaine R. Coats", phone: "262-397-2323", email: "ElaineRCoats@rhyta.com", category: "Friends" },
        { name: "Theodore P. Thompson", phone: "917-405-5137", email: "TheodorePThompson@dayrep.com", category: "Friends" },
        { name: "Deborah K. Epperson", phone: "501-858-6956", email: "DeborahKEpperson@dayrep.com", category: "Work" },
        { name: "Steven L. Ramos", phone: "920-703-9974", email: "StevenLRamos@dayrep.com", category: "Work" },
        { name: "Herbert S. Livingston", phone: "208-642-4758", email: "HerbertSLivingston@armyspy.com", category: "Work" },
        { name: "Christopher N. Smith", phone: "847-939-9380", email: "ChristopherNSmith@armyspy.com", category: "Work" },
        { name: "Charley D. Pryor", phone: "240-752-1933", email: "CharleyDPryor@rhyta.com", category: "Family" },
        { name: "Douglas D. Thompson", phone: "706-846-1127", email: "DouglasDThompson@rhyta.com", category: "Friends" },
        { name: "Freddie G. Thomas", phone: "661-378-8737", email: "FreddieGThomas@teleworm.us", category: "Friends" },
        { name: "Michael S. Duncan", phone: "608-541-2107", email: "MichaelSDuncan@dayrep.com", category: "Work" },
        { name: "Alberta D. Mui", phone: "503-267-4837", email: "AlbertaDMui@armyspy.com", category: "Friends" },
        { name: "Mary J. Vos", phone: "407-946-7278", email: "MaryJVos@armyspy.com", category: "Family" },
        { name: "Theresa R. Barham", phone: "260-225-0475", email: "TheresaRBarham@dayrep.com", category: "Friends" },
        { name: "Lewis C. Watson", phone: "440-919-4997", email: "LewisCWatson@dayrep.com", category: "Family" },
        { name: "Margaret T. Anderson", phone: "815-957-8935", email: "MargaretTAnderson@armyspy.com", category: "Work" },
        { name: "Kimberly A. Combs", phone: "302-265-0294", email: "KimberlyACombs@jourrapide.com", category: "Work" },
        { name: "Carolyn F. Lebrun", phone: "541-494-7538", email: "CarolynFLebrun@teleworm.us", category: "Family" },
        { name: "Patricia B. Flannagan", phone: "317-725-0796", email: "PatriciaBFlannagan@armyspy.com", category: "Work" },
        { name: "Rebecca H. Downard", phone: "940-862-8492", email: "RebeccaHDownard@teleworm.us", category: "Work" },
        { name: "James J. Rosenberg", phone: "815-905-3483", email: "JamesJRosenberg@dayrep.com", category: "Friends" },
        { name: "Geraldine C. Mager", phone: "715-616-4858", email: "GeraldineCMager@jourrapide.com", category: "Work" },
        { name: "Lonnie E. Snider", phone: "718-359-1962", email: "LonnieESnider@teleworm.us", category: "Friends" }
    ];

    var viewModel = {
        items: [
            {
                title: "All",
                text: "All - description",
                items: new DevExpress.data.DataSource({ 
                    store: contacts, sort: "name" })
            },
            {
                title: "Family",
                text: "Family - description",
                items: new DevExpress.data.DataSource({ 
                    store: contacts, sort: "name", filter: ["category", "=", "Family"] })
            },
            {
                title: "Friends",
                text: "Friends - description",
                items: new DevExpress.data.DataSource({ 
                    store: contacts, sort: "name", filter: ["category", "=", "Friends"] })
            },
            {
                title: "Work",
                text: "Work - description",
                items: new DevExpress.data.DataSource({ 
                    store: contacts, sort: "name", filter: ["category", "=", "Work"] })
            }
        ]
    };
    return viewModel;
};




