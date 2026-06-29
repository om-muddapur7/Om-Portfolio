import { useState, useEffect } from "react";

const TYPING_ROLES = [
  "Web Developer",
  "React Specialist",
  "Next.js Developer",
  "TypeScript Engineer",
  "UI/UX Enthusiast",
];

const TECH_STACK = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="#61DAFB">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6.627-3.5C2.235 10 0 11.343 0 12s2.235 2 5.373 2c.297 0 .59-.01.878-.03C7.169 15.754 8.415 17.5 9.5 17.5c.347 0 .69-.123 1-.37V17c0-.71-.147-1.4-.42-2.04A13.54 13.54 0 0 1 9.4 14c.2-.32.39-.65.56-.99.17.34.36.67.56.99-.36.63-.64 1.3-.8 2C9.45 16.63 9.5 17.32 9.5 18v-.13c.31.247.653.37 1 .37 1.085 0 2.331-1.746 3.249-3.53.288.02.581.03.878.03C17.765 14.74 20 13.397 20 12.74s-2.235-2-5.373-2c-.297 0-.59.01-.878.03C12.831 9.006 11.585 7.26 10.5 7.26c-.347 0-.69.123-1 .37V7.74c0 .71.147 1.4.42 2.04.16.33.35.66.56.99-.2.32-.39.65-.56.99-.17-.34-.36-.67-.56-.99.36-.63.64-1.3.8-2C9.45 8.11 9.5 7.42 9.5 6.74v.13c-.31-.247-.653-.37-1-.37-1.085 0-2.331 1.746-3.249 3.53A13.59 13.59 0 0 0 5.373 10z"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.465-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" fill="#3178C6">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.698v2.192H9.088v7.538H6.401v-7.538H3.375z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 24 24">
        <path fill="#F7DF1E" d="M0 0h24v24H0z"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: (
      <svg viewBox="0 0 24 24" fill="#339933">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.087.05-.141.144-.141.242v10.15c0 .097.054.189.139.235l2.409 1.391c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.570.328.924.942.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.076c-.279.163-.599.247-.925.247zm2.718-6.998c-3.852 0-4.659-1.77-4.659-3.254 0-.142.114-.253.256-.253h1.139c.127 0 .233.092.252.217.172 1.160.684 1.746 3.012 1.746 1.854 0 2.641-.420 2.641-1.402 0-.566-.224-.986-3.100-1.268-2.405-.238-3.893-.767-3.893-2.687 0-1.770 1.491-2.824 3.993-2.824 2.811 0 4.201.975 4.373 3.070a.256.256 0 0 1-.064.196.255.255 0 0 1-.189.082h-1.144a.253.253 0 0 1-.248-.204c-.274-1.215-.937-1.605-2.728-1.605-2.010 0-2.244.700-2.244 1.225 0 .635.276.820 3.006 1.178 2.701.355 3.987.859 3.987 2.769 0 1.910-1.594 3.013-4.390 3.013z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.720.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    icon: (
      <svg viewBox="0 0 24 24" fill="#4169E1">
        <path d="M23.5454 11.9048C23.3679 8.52059 21.7454 5.9538 18.9561 4.23862C17.2375 3.19988 15.2647 2.66595 13.1786 2.66595C10.5786 2.66595 8.17856 3.50595 6.25308 5.0974C4.33856 6.67726 3.07022 8.95964 2.60594 11.7C2.14094 14.4404 2.60571 17.1261 3.97665 19.3917C5.34665 21.6573 7.5 23.2905 10.178 24C10.6647 24.1143 11.1476 24.1714 11.6309 24.1714C13.0476 24.1714 14.4095 23.6809 15.4995 22.7428C17.0495 24.0095 18.988 24.4285 20.8999 23.9238C21.6237 23.7238 22.2856 23.3619 22.8237 22.8523C23.6285 22.1 24.0714 21.0761 23.9999 20.0333C23.9523 19.3047 23.7047 18.6143 23.2523 18.0238C23.4571 16.0523 23.6285 13.7047 23.5454 11.9048ZM8.73808 19.8809C8.44284 19.8809 8.14284 19.8476 7.8476 19.7619L7.56712 19.681L7.54284 19.3952C7.51379 19.0666 7.5 18.7238 7.5 18.381C7.5 18.0047 7.51856 17.6285 7.55236 17.2619C7.0571 17.4428 6.60946 17.5428 6.14712 17.5428C5.87141 17.5428 5.59523 17.5047 5.32427 17.4285L5.14284 17.381L5.0571 17.2095C4.81427 16.7142 4.7571 16.1761 4.91189 15.681C5.07141 15.1666 5.43331 14.7523 5.95712 14.4904L6.06665 14.4381L6.17141 14.4619C6.3571 14.5142 6.55236 14.5476 6.74762 14.5666C6.61903 14.319 6.5 14.0666 6.39522 13.8095C6.12427 13.1666 6.00949 12.4952 6.0571 11.8285C6.1571 10.4047 6.87617 9.17607 8.00473 8.43322C9.11901 7.70322 10.4571 7.54369 11.7523 7.97607C12.5285 7.54845 13.3571 7.35797 14.2095 7.40607C15.0571 7.45417 15.8238 7.73893 16.4571 8.24750C17.7286 9.30226 18.1571 11.0333 17.578 12.681C17.3047 13.4571 16.8047 14.1523 16.1523 14.7095C16.3999 15.0333 16.6285 15.3809 16.8285 15.7523C17.4714 16.9523 17.6476 18.2619 17.3523 19.4714L17.3142 19.6333L17.1523 19.7095C16.5047 20.0095 15.8 20.1143 15.1047 20.0095L14.9238 19.981C14.4047 19.9 13.9285 19.6904 13.5047 19.3666C13.0619 19.6238 12.5857 19.7714 12.1047 19.8C11.5952 19.831 11.0809 19.7571 10.6190 19.581C10.0999 19.7571 9.42855 19.8809 8.73808 19.8809Z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.185m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.548 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
      </svg>
    ),
  },
  {
    name: "Prisma",
    color: "#2D3748",
    icon: (
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.32 1.32 0 0 0-1.206.636L2.205 15.803a1.33 1.33 0 0 0 .027 1.37l4.036 6.365a1.328 1.328 0 0 0 1.553.524l13.37-4.714a1.33 1.33 0 0 0 .616-2.063zm-2.41.107l-10.58 3.73a.468.468 0 0 1-.561-.219L4.19 15.81a.47.47 0 0 1 .023-.498l7.394-11.55a.467.467 0 0 1 .785-.002l7.7 16.44a.464.464 0 0 1-.696.192z"/>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    color: "#E10098",
    icon: (
      <svg viewBox="0 0 24 24" fill="#E10098">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.4a9.6 9.6 0 1 1 0 19.2A9.6 9.6 0 0 1 12 2.4zM7.555 7.555l-.707.707 1.414 1.414.707-.707-1.414-1.414zm8.483 0l-1.414 1.414.707.707 1.414-1.414-.707-.707zM12 6.6a.6.6 0 0 0-.6.6v3a.6.6 0 0 0 1.2 0v-3a.6.6 0 0 0-.6-.6zm-4.8 4.8a.6.6 0 0 0 0 1.2h3a.6.6 0 0 0 0-1.2h-3zm6.6 0a.6.6 0 0 0 0 1.2h3a.6.6 0 0 0 0-1.2h-3zM8.262 15.738l-.707.707 1.414 1.414.707-.707-1.414-1.414zm7.069 0l-1.414 1.414.707.707 1.414-1.414-.707-.707zM12 16.2a.6.6 0 0 0-.6.6v3a.6.6 0 0 0 1.2 0v-3a.6.6 0 0 0-.6-.6z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#F24E1E",
    icon: (
      <svg viewBox="0 0 24 24" fill="#F24E1E">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zm10.726 3.019c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49zm-7.51 0c0 1.665 1.355 3.019 3.019 3.019s3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019-3.019 1.355-3.019 3.019zm7.51 7.51c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49zm-7.51 0c0 1.665 1.355 3.019 3.019 3.019s3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019-3.019 1.354-3.019 3.019z"/>
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK];

function useTypingAnimation(words, { typeSpeed = 80, deleteSpeed = 50, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    top: `${(i * 47 + 13) % 90}%`,
    left: `${(i * 31 + 7) % 100}%`,
    size: i % 3 === 0 ? 3 : 2,
    delay: `${((i * 0.7) % 5).toFixed(1)}s`,
    duration: `${(4 + (i % 4)).toFixed(1)}s`,
  }));
  return (
    <>
      {dots.map((d) => (
        <span key={d.id} style={{
          position: "absolute", top: d.top, left: d.left,
          width: d.size, height: d.size, borderRadius: "50%",
          background: "#3b82f6", opacity: 0.5,
          animation: `float ${d.duration} ease-in-out ${d.delay} infinite alternate`,
          pointerEvents: "none",
        }} />
      ))}
    </>
  );
}

export default function HeroSection() {
  const typedRole = useTypingAnimation(TYPING_ROLES);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes float {
          from { transform: translateY(0px); opacity: 0.3; }
          to   { transform: translateY(-14px); opacity: 0.7; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }

        html { scroll-behavior: smooth; }

        .hero-wrapper {
          background: #050d1a;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 48px;
          background: rgba(5, 13, 26, 0.7);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nav-logo { font-family:'Syne',sans-serif; font-size:22px; font-weight:800; color:#fff; letter-spacing:-0.5px; }
        .nav-logo span { color:#3b82f6; }
        .nav-links { display:flex; gap:8px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); border-radius:100px; padding:6px 12px; list-style:none; }
        .nav-links a { color:rgba(255,255,255,0.7); text-decoration:none; font-size:14px; padding:6px 14px; border-radius:100px; transition:all 0.2s; }
        .nav-links a:hover { color:#fff; background:rgba(255,255,255,0.08); }
        .nav-cta { background:#2563eb; color:#fff; border:none; border-radius:100px; padding:10px 22px; font-size:14px; font-weight:500; cursor:pointer; transition:background 0.2s; text-decoration:none; }
        .nav-cta:hover { background:#1d4ed8; }

        /* HERO */
        .hero {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 100px 24px 60px;
          text-align: center;
        }
        .hero::before {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse 60% 45% at 50% 42%, rgba(37,99,235,0.14) 0%, transparent 70%);
          pointer-events:none;
        }

        .hero-content { position:relative; z-index:10; max-width:680px; }

        .badge { display:inline-flex; align-items:center; gap:7px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.25); border-radius:100px; padding:6px 16px; margin-bottom:32px; animation:fadeUp 0.9s 0.1s ease both; }
        .badge-dot { width:7px; height:7px; border-radius:50%; background:#3b82f6; position:relative; }
        .badge-dot::after { content:''; position:absolute; inset:-3px; border-radius:50%; border:1px solid #3b82f6; animation:pulse-ring 1.5s ease-out infinite; }
        .badge span { font-size:13px; color:#93c5fd; font-weight:500; }

        .greeting { font-size:clamp(15px,2vw,18px); color:rgba(255,255,255,0.5); margin-bottom:8px; animation:fadeUp 0.9s 0.15s ease both; }

        .name { font-family:'Syne',sans-serif; font-size:clamp(40px,7vw,72px); font-weight:800; line-height:1.05; color:#fff; margin-bottom:16px; letter-spacing:-1.5px; animation:fadeUp 0.9s 0.2s ease both; }
        .name-highlight { background:linear-gradient(135deg,#60a5fa,#3b82f6,#818cf8); background-size:200% 200%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:gradientShift 4s ease infinite; }

        .role-line { font-size:clamp(18px,3vw,26px); color:rgba(255,255,255,0.85); font-weight:500; margin-bottom:28px; height:38px; display:flex; align-items:center; justify-content:center; gap:6px; animation:fadeUp 0.9s 0.3s ease both; }
        .role-prefix { color:rgba(255,255,255,0.4); font-weight:400; }
        .typed-text { color:#60a5fa; }
        .cursor { width:2px; height:1.1em; background:#3b82f6; border-radius:2px; animation:blink 0.9s step-end infinite; display:inline-block; vertical-align:middle; margin-left:2px; }

        .desc { font-size:clamp(14px,1.8vw,16px); color:rgba(255,255,255,0.45); line-height:1.75; max-width:520px; margin:0 auto 40px; animation:fadeUp 0.9s 0.4s ease both; }

        .buttons { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:48px; animation:fadeUp 0.9s 0.5s ease both; }
        .btn-primary { display:inline-flex; align-items:center; gap:8px; background:#2563eb; color:#fff; text-decoration:none; border-radius:100px; padding:13px 28px; font-size:15px; font-weight:500; border:none; cursor:pointer; transition:all 0.2s; box-shadow:0 0 24px rgba(37,99,235,0.35); }
        .btn-primary:hover { background:#1d4ed8; transform:translateY(-2px); box-shadow:0 0 32px rgba(37,99,235,0.5); }
        .btn-secondary { display:inline-flex; align-items:center; gap:8px; background:transparent; color:rgba(255,255,255,0.8); text-decoration:none; border:1px solid rgba(255,255,255,0.15); border-radius:100px; padding:13px 28px; font-size:15px; font-weight:500; cursor:pointer; transition:all 0.2s; }
        .btn-secondary:hover { border-color:rgba(255,255,255,0.35); color:#fff; transform:translateY(-2px); }

        .social-row { display:flex; align-items:center; gap:16px; justify-content:center; animation:fadeUp 0.9s 0.6s ease both; }
        .social-label { font-size:13px; color:rgba(255,255,255,0.3); font-weight:500; }
        .social-link { width:40px; height:40px; border-radius:50%; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center; transition:all 0.2s; color:rgba(255,255,255,0.6); text-decoration:none; }
        .social-link:hover { border-color:#3b82f6; background:rgba(59,130,246,0.1); color:#60a5fa; transform:translateY(-3px); }
        .social-link svg { width:18px; height:18px; fill:currentColor; }

        /* SCROLL INDICATOR */
        .scroll-hint {
          position: absolute; bottom: -0.5px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          animation: fadeUp 1s 1s ease both;
          cursor: pointer;
        }
        .scroll-mouse {
          width: 22px; height: 34px;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 11px;
          position: relative;
          display: flex; justify-content: center;
          padding-top: 5px;
        }
        .scroll-wheel {
          width: 3px; height: 6px;
          background: #3b82f6;
          border-radius: 2px;
          animation: scrollBounce 1.5s ease-in-out infinite;
          position: absolute;
          top: 6px; left: 50%; transform: translateX(-50%);
        }
        .scroll-hint span { font-size: 9px; color: rgba(255,255,255,0.2); letter-spacing: 2.5px; text-transform: uppercase; }

        /* ── MARQUEE SECTION ── */
        .marquee-section {
          background: #050d1a;
          padding: 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          position: relative;
        }

        /* fade edges */
        .marquee-section::before,
        .marquee-section::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-section::before { left: 0; background: linear-gradient(to right, #050d1a, transparent); }
        .marquee-section::after  { right: 0; background: linear-gradient(to left,  #050d1a, transparent); }

        .marquee-label {
          text-align: center;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          padding: 28px 0 18px;
          font-weight: 500;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
          padding-bottom: 28px;
        }
        .marquee-track:hover { animation-play-state: paused; }

        .tech-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          margin: 0 10px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          white-space: nowrap;
          transition: all 0.25s ease;
          cursor: default;
        }
        .tech-pill:hover {
          border-color: rgba(59,130,246,0.35);
          background: rgba(59,130,246,0.07);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .tech-icon {
          width: 22px; height: 22px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .tech-icon svg { width: 100%; height: 100%; }
        .tech-name {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.3px;
        }
        .tech-pill:hover .tech-name { color: #fff; }

        @media (max-width: 640px) {
          .nav { padding: 14px 20px; }
          .nav-links { display: none; }
          .hero { padding: 100px 20px 70px; }
          .marquee-section::before,
          .marquee-section::after { width: 60px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">OM<span>.</span></div>
        <ul className="nav-links">
          {["About", "Projects", "Experience", "Testimonials"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Contact Me</a>
      </nav>

      <div className="hero-wrapper">
        {/* HERO */}
        <section className="hero">
          <Particles />

          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot" />
              <span>Available for work</span>
            </div>

            <p className="greeting">Hi, I am</p>

            <h1 className="name">
              <span className="name-highlight">Om Muddapur</span>
            </h1>

            <div className="role-line">
              <span className="role-prefix">I'm a</span>
              <span className="typed-text">{typedRole}</span>
              <span className="cursor" />
            </div>

            <p className="desc">
              Specializing in React, Next.js and TypeScript — I build scalable, performant web applications that users love and businesses rely on.
            </p>

            <div className="buttons">
              <a href="#contact" className="btn-primary">
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/cv.pdf" download className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download CV
              </a>
            </div>

            <div className="social-row">
              <span className="social-label">Follow me:</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>


          {/* Animated scroll mouse */}
          <div className="mt-5 p-5 scroll-hint" onClick={() => document.querySelector('.marquee-section')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="scroll-mouse ">
              <div className="scroll-wheel" />
            </div>
            <span>Scroll</span>
          </div>
        </section>

        {/* TECH STACK MARQUEE */}
        <div className="marquee-section">
          <p className="marquee-label">Tech Stack</p>
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((tech, i) => (
              <div className="tech-pill" key={i}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}