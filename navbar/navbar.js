let navbarData = {
    en: [
        {
            name: "Projects",
            sub: [
                {
                    name: "Steedland",
                    link: "/steedland"
                },
                {
                    name: "Lapinou second",
                    link: "/ls"
                },
                {
                    name: "Skribi",
                    link: "/skribi"
                },
                {
                    name: "Combine domination",
                    link: "/cd"
                },
                {
                    name: "SnowJump",
                    link: "/sj"
                },
                {
                    name: "FebruaryChallenge2021",
                    link: "/fc2021"
                }
            ],
            link: "/projects"
        },
        {
            name: " What I learn",
            sub: [],
            link: "/learn"
        },
        {
            name: "Programming Games",
            sub: [],
            link: "/games"
        }
    ],
    fr: [
        {
            name: "Projets",
            sub: [
                {
                    name: "Steedland",
                    link: "/steedland"
                },
                {
                    name: "Lapinou second",
                    link: "/ls"
                },
                {
                    name: "Skribi",
                    link: "/skribi"
                },
                {
                    name: "Combine domination",
                    link: "/cd"
                },
                {
                    name: "SnowJump",
                    link: "/sj"
                },
                {
                    name: "FebruaryChallenge2021",
                    link: "/fc2021"
                }
            ],
            link: "/projects"
        },
        {
            name: "Ce que j'apprends",
            sub: [],
            link: "/learn"
        },
        {
            name: "Jeux de programmation",
            sub: [],
            link: "/games"
        }
    ],
    dibi: [
        {
            name: "Projets",
            sub: [
                {
                    name: "Steedland",
                    link: "/steedland"
                },
                {
                    name: "Lapinou second",
                    link: "/ls"
                },
                {
                    name: "Skribi",
                    link: "/skribi"
                },
                {
                    name: "Combine domination",
                    link: "/cd"
                },
                {
                    name: "SnowJump",
                    link: "/sj"
                },
                {
                    name: "FebruaryChallenge2021",
                    link: "/fc2021"
                }
            ],
            link: "/projects"
        },
        {
            name: "Ce que j'apprends",
            sub: [],
            link: "/learn"
        },
        {
            name: "Jeux de programmation",
            sub: [],
            link: "/games"
        }
    ]
}

let url = window.location.href;
let lang = url.includes("/en") ? "en" : url.includes("/fr") ? "fr" : "dibi";
console.log(lang);

// je génère maintenant le menu

let menu = document.createElement("div");
menu.classList.add("navbar");

let baseLink = "/" + lang

navbarData[lang].forEach(element => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("navbar-item");
    // le div pour le nom du menu dans un lien
    let menuItemLink = document.createElement("a");
    menuItemLink.href = baseLink + element.link;
    let menuItemLinkText = document.createElement("div");
    menuItemLinkText.classList.add("navbar-item-text");
    menuItemLinkText.innerText = element.name;
    menuItemLink.appendChild(menuItemLinkText);
    menuItem.appendChild(menuItemLink);
    // le div pour les sous-menu
    let menuItemSub = document.createElement("div");
    menuItemSub.classList.add("navbar-item-sub");
    element.sub.forEach(subElement => {
        let menuItemSubItem = document.createElement("div");
        menuItemSubItem.classList.add("navbar-item-sub-item");
        let menuItemSubItemLink = document.createElement("a");
        menuItemSubItemLink.href = baseLink + element.link + subElement.link;
        let menuItemSubItemLinkText = document.createElement("div");
        menuItemSubItemLinkText.classList.add("navbar-item-sub-item-text");
        menuItemSubItemLinkText.innerText = subElement.name;
        menuItemSubItemLink.appendChild(menuItemSubItemLinkText);
        menuItemSubItem.appendChild(menuItemSubItemLink);
        menuItemSub.appendChild(menuItemSubItem);
    });
    menuItem.appendChild(menuItemSub);
    menu.appendChild(menuItem);
});

// ajout du menu au html
document.body.appendChild(menu);