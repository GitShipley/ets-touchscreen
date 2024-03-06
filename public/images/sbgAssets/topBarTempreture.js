import React from "react";

const TopBarTempreture = ({ temperature }) => {
  let x = Math.round(temperature);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="50"
      viewBox="0 0 62 50"
      fill="none"
    >
      <path
        d="M4.45056 36.5416C1.98116 37.9749 0.777224 40.8968 1.51522 43.6656C2.25323 46.4345 4.74914 48.3598 7.60056 48.3598C10.452 48.3598 12.9479 46.4345 13.6859 43.6656C14.4239 40.8968 13.22 37.9749 10.7506 36.5416V23.0833C10.7506 21.3344 9.34025 19.9166 7.60056 19.9166C5.86086 19.9166 4.45056 21.3344 4.45056 23.0833V36.5416"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.45038 29.4167H10.7504"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {/* <path
        d="M22.4597 33.1686C21.2557 33.1686 20.2757 32.9796 19.5197 32.6016C18.7637 32.2236 18.2107 31.7196 17.8607 31.0896C17.5107 30.4456 17.3357 29.7386 17.3357 28.9686C17.3357 28.1846 17.5177 27.4986 17.8817 26.9106C18.2597 26.3086 18.8547 25.8466 19.6667 25.5246C19.0087 25.1746 18.5187 24.7196 18.1967 24.1596C17.8747 23.5856 17.7137 22.9556 17.7137 22.2696C17.7137 21.5276 17.8887 20.8556 18.2387 20.2536C18.5887 19.6516 19.1137 19.1686 19.8137 18.8046C20.5277 18.4406 21.4097 18.2586 22.4597 18.2586C23.5097 18.2586 24.3847 18.4406 25.0847 18.8046C25.7847 19.1686 26.3097 19.6516 26.6597 20.2536C27.0237 20.8556 27.2057 21.5276 27.2057 22.2696C27.2057 22.9556 27.0377 23.5856 26.7017 24.1596C26.3797 24.7196 25.8897 25.1746 25.2317 25.5246C26.0577 25.8466 26.6527 26.3086 27.0167 26.9106C27.3807 27.4986 27.5627 28.1846 27.5627 28.9686C27.5627 29.7386 27.3877 30.4456 27.0377 31.0896C26.6877 31.7196 26.1347 32.2236 25.3787 32.6016C24.6367 32.9796 23.6637 33.1686 22.4597 33.1686ZM22.4597 31.0896C23.2577 31.0896 23.8667 30.8936 24.2867 30.5016C24.7067 30.0956 24.9167 29.5426 24.9167 28.8426C24.9167 28.1286 24.7067 27.5756 24.2867 27.1836C23.8667 26.7916 23.2577 26.5956 22.4597 26.5956C21.6617 26.5956 21.0457 26.7916 20.6117 27.1836C20.1917 27.5756 19.9817 28.1286 19.9817 28.8426C19.9817 29.5426 20.1917 30.0956 20.6117 30.5016C21.0457 30.8936 21.6617 31.0896 22.4597 31.0896ZM22.4597 24.5166C23.1317 24.5166 23.6567 24.3416 24.0347 23.9916C24.4267 23.6276 24.6227 23.1096 24.6227 22.4376C24.6227 21.7796 24.4267 21.2686 24.0347 20.9046C23.6567 20.5266 23.1317 20.3376 22.4597 20.3376C21.7737 20.3376 21.2417 20.5266 20.8637 20.9046C20.4857 21.2686 20.2967 21.7796 20.2967 22.4376C20.2967 23.1096 20.4857 23.6276 20.8637 23.9916C21.2417 24.3416 21.7737 24.5166 22.4597 24.5166ZM33.8244 33.1686C32.9984 33.1686 32.2564 33.0496 31.5984 32.8116C30.9544 32.5736 30.4014 32.1886 29.9394 31.6566C29.4774 31.1106 29.1274 30.3896 28.8894 29.4936C28.6514 28.5836 28.5324 27.4636 28.5324 26.1336C28.5324 24.6356 28.6444 23.3826 28.8684 22.3746C29.1064 21.3666 29.4424 20.5616 29.8764 19.9596C30.3244 19.3576 30.8704 18.9236 31.5144 18.6576C32.1584 18.3916 32.8934 18.2586 33.7194 18.2586C34.7694 18.2586 35.6234 18.4616 36.2814 18.8676C36.9394 19.2596 37.4224 19.7916 37.7304 20.4636C38.0384 21.1356 38.1924 21.8986 38.1924 22.7526H35.5884C35.5884 22.2486 35.5184 21.8216 35.3784 21.4716C35.2524 21.1076 35.0424 20.8346 34.7484 20.6526C34.4544 20.4566 34.0764 20.3586 33.6144 20.3586C32.9284 20.3586 32.4104 20.5476 32.0604 20.9256C31.7104 21.2896 31.4724 21.8146 31.3464 22.5006C31.2344 23.1866 31.1714 24.0056 31.1574 24.9576C31.2414 24.8456 31.4164 24.6916 31.6824 24.4956C31.9624 24.2856 32.3264 24.0966 32.7744 23.9286C33.2224 23.7606 33.7334 23.6766 34.3074 23.6766C35.3154 23.6766 36.1414 23.8866 36.7854 24.3066C37.4294 24.7126 37.9054 25.2726 38.2134 25.9866C38.5214 26.7006 38.6754 27.5126 38.6754 28.4226C38.6754 29.3886 38.4654 30.2286 38.0454 30.9426C37.6254 31.6566 37.0514 32.2096 36.3234 32.6016C35.5954 32.9796 34.7624 33.1686 33.8244 33.1686ZM33.6984 31.0686C34.2304 31.0686 34.6644 30.9496 35.0004 30.7116C35.3504 30.4736 35.6094 30.1516 35.7774 29.7456C35.9454 29.3396 36.0294 28.8916 36.0294 28.4016C36.0294 27.8836 35.9454 27.4286 35.7774 27.0366C35.6094 26.6306 35.3504 26.3156 35.0004 26.0916C34.6644 25.8536 34.2304 25.7346 33.6984 25.7346C33.1664 25.7346 32.7254 25.8536 32.3754 26.0916C32.0254 26.3156 31.7664 26.6306 31.5984 27.0366C31.4304 27.4286 31.3464 27.8906 31.3464 28.4226C31.3464 28.9126 31.4304 29.3606 31.5984 29.7666C31.7664 30.1726 32.0254 30.4946 32.3754 30.7326C32.7254 30.9566 33.1664 31.0686 33.6984 31.0686ZM41.031 20.8892C40.6866 20.8892 40.3716 20.8052 40.086 20.6372C39.8004 20.4692 39.5736 20.2424 39.4056 19.9568C39.2376 19.6712 39.1536 19.3562 39.1536 19.0118C39.1536 18.659 39.2376 18.3398 39.4056 18.0542C39.5736 17.7686 39.8004 17.5418 40.086 17.3738C40.3716 17.2058 40.6866 17.1218 41.031 17.1218C41.3838 17.1218 41.703 17.2058 41.9886 17.3738C42.2742 17.5418 42.501 17.7686 42.669 18.0542C42.837 18.3398 42.921 18.659 42.921 19.0118C42.921 19.3562 42.837 19.6712 42.669 19.9568C42.501 20.2424 42.2742 20.4692 41.9886 20.6372C41.703 20.8052 41.3838 20.8892 41.031 20.8892ZM41.031 19.9316C41.283 19.9316 41.4972 19.8434 41.6736 19.667C41.8584 19.4822 41.9508 19.2638 41.9508 19.0118C41.9508 18.7514 41.8584 18.533 41.6736 18.3566C41.4972 18.1802 41.283 18.092 41.031 18.092C40.779 18.092 40.5606 18.1802 40.3758 18.3566C40.1994 18.533 40.1112 18.7514 40.1112 19.0118C40.1112 19.2554 40.1994 19.4696 40.3758 19.6544C40.5606 19.8392 40.779 19.9316 41.031 19.9316ZM43.8835 25.9166V17.273H50.2591V18.8102H45.7609V20.9522H49.7803V22.4768H45.7609V25.9166H43.8835Z"
        fill="white"
      /> */}
      <text x="30" y="30" fontSize="17" fill="white" textAnchor="middle">
        {x}°
      </text>
      <text x="52" y="25" fontSize="17" fill="white" textAnchor="end">
        F
      </text>
    </svg>
  );
};

export default TopBarTempreture;