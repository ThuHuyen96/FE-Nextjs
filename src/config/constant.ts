export const PAGINATION: { [key: string]: any } = {
  DEFAULT_CURRENT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 25,
  DEFAULT_TOTAL_ITEM: 0,
  DEFAULT_PAGE_SIZE_OPTIONS: ["25", "50", "100", "150", "200"],
  DEFAULT_TOTAL_PAGE: 1,
}

export const footerItems = [
  {
    label: "会員登録",
    url: "#",
  },
  {
    label: "運営会社",
    url: "#",
  },
  {
    label: "利用規約",
    url: "#",
  },
  {
    label: "個人情報の取扱について",
    url: "#",
  },
  {
    label: "特定商取引法に基づく表記",
    url: "#",
  },
  {
    label: "お問い合わせ",
    url: "#",
  },
]

export const headerItems = [
  {
    label: "自分の記録",
    url: "/my-record",
    icon: "/img/icon/icon_memo.svg",
  },
  {
    label: "チャレンジ",
    url: "#",
    icon: "/img/icon/icon_challenge.svg",
  },
  {
    label: "お知らせ",
    url: "#",
    icon: "/img/icon/icon_info.svg",
    noti: 1,
  },
  {
    label: "",
    url: "#",
    icon: "/img/icon/icon_menu.svg",
    submenu: [
      {
        label: "自分の記録",
        url: "/my-record",
      },
      {
        label: "体重グラフ",
        url: "#",
      },
      {
        label: "目標",
        url: "#",
      },
      {
        label: "選択中のコース",
        url: "#",
      },
      {
        label: "コラム一覧",
        url: "/column",
      },
      {
        label: "設定",
        url: "#",
      },
    ],
  },
]

export const categories = [
  {
    label: "Morning",
    icon: "/img/icon/icon_knife.svg",
    value: "Morning"
  },
  {
    label: "Lunch",
    icon: "/img/icon/icon_knife.svg",
    value: "Lunch"
  },
  {
    label: "Dinner",
    icon: "/img/icon/icon_knife.svg",
    value: "Dinner"
  },
  {
    label: "Snack",
    icon: "/img/icon/icon_cup.svg",
    value: "Snack"
  }
]
