const presets = {};

presets.sequential = [
  {
    colors1: [
      {
        id: "1",
        color: "#965fcf",
      },
      {
        id: "2",
        color: "#fb6ab7",
      },
      {
        id: "3",
        color: "#eec7bb",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#05fffb",
      },
      {
        color: "#127d7b",
        id: "0.47830772234919783",
      },
    ],
    numColors: 6,
    mode: "sequential",
    correctLightness: false,
    bezier: false,
    steps: ["#965fcf", "#be63c5", "#e768bc", "#f87db8", "#f3a2b9", "#eec7bb"],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#183f5a",
      },
      {
        id: "2",
        color: "#e84f8c",
      },
      {
        id: "3",
        color: "#f5c747",
      },
    ],
    colors2: [
      {
        color: "#3afd3a",
        id: "0.8987287111793338",
      },
      {
        id: "4",
        color: "#4b5b33",
      },
    ],
    numColors: 6,
    mode: "sequential",
    correctLightness: true,
    bezier: false,
    steps: ["#183f5a", "#754670", "#b84b80", "#ea6082", "#f09862", "#f5c747"],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#1a102e",
      },
      {
        id: "3",
        color: "#5cb0f9",
      },
      {
        color: "#b7e0f5",
        id: "0.7658614727428408",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#05fffb",
      },
      {
        color: "#127d7b",
        id: "0.47830772234919783",
      },
    ],
    numColors: "6",
    mode: "sequential",
    correctLightness: false,
    bezier: true,
    steps: ["#1a102e", "#374670", "#5678a9", "#76a4d4", "#97c7ee", "#b7e0f5"],
  },
  {
    colors1: [
      {
        id: "2",
        color: "#1a102e",
      },
      {
        color: "#6034bd",
        id: "0.23199516199055936",
      },
      {
        color: "#b899f9",
        id: "0.9889637782664742",
      },
      {
        color: "#d6c7ff",
        id: "0.7755941156165633",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#05fffb",
      },
      {
        color: "#127d7b",
        id: "0.47830772234919783",
      },
    ],
    numColors: "6",
    mode: "sequential",
    correctLightness: false,
    bezier: true,
    steps: ["#1a102e", "#442b75", "#7151b0", "#9c7cdb", "#bfa5f5", "#d6c7ff"],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#6b1a18",
      },
      {
        id: "3",
        color: "#e34a45",
      },
      {
        color: "#f9d9d9",
        id: "0.7658614727428408",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#05fffb",
      },
      {
        color: "#127d7b",
        id: "0.47830772234919783",
      },
    ],
    numColors: "6",
    mode: "sequential",
    correctLightness: true,
    bezier: false,
    steps: ["#6b1a18", "#9d2e2b", "#d3433f", "#ea7672", "#f2a9a8", "#f9d9d9"],
  },
];

presets.diverging = [
  {
    colors1: [
      {
        id: "1",
        color: "#a97043",
      },
      {
        id: "2",
        color: "#fdbc72",
      },
      {
        id: "3",
        color: "#dbdbdb",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#dbdbdb",
      },
      {
        color: "#5497d5",
        id: "0.47830772234919783",
      },
      {
        color: "#3a6995",
        id: "0.1183321216195754",
      },
    ],
    numColors: "7",
    mode: "diverging",
    correctLightness: true,
    bezier: false,
    steps: [
      "#a97043",
      "#cb8e56",
      "#eeae69",
      "#dbdbdb",
      "#92b6d8",
      "#508fcb",
      "#3a6995",
    ],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#bf3588",
      },
      {
        id: "3",
        color: "#f7f7f7",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#f7f7f7",
      },
      {
        color: "#c0df91",
        id: "0.36903834244640055",
      },
      {
        color: "#3b8541",
        id: "0.1183321216195754",
      },
    ],
    numColors: "9",
    mode: "diverging",
    correctLightness: true,
    bezier: false,
    steps: [
      "#bf3588",
      "#cf6da8",
      "#dd9cc3",
      "#eacadd",
      "#f7f7f7",
      "#c1e094",
      "#94c176",
      "#67a35c",
      "#3b8541",
    ],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#821917",
      },
      {
        id: "2",
        color: "#ff4d4d",
      },
      {
        id: "3",
        color: "#f0f0f0",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#f0f0f0",
      },
      {
        color: "#4192e2",
        id: "0.47830772234919783",
      },
      {
        color: "#143a6a",
        id: "0.1183321216195754",
      },
    ],
    numColors: "9",
    mode: "diverging",
    correctLightness: true,
    bezier: true,
    steps: [
      "#821917",
      "#bb3f39",
      "#e57268",
      "#faaea5",
      "#f0f0f0",
      "#acc0e3",
      "#6e91c7",
      "#38649e",
      "#143a6a",
    ],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#3c8073",
      },
      {
        id: "3",
        color: "#ece5d1",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#ece5d1",
      },
      {
        color: "#bc4e29",
        id: "0.1183321216195754",
      },
    ],
    numColors: "11",
    mode: "diverging",
    correctLightness: false,
    bezier: true,
    steps: [
      "#3c8073",
      "#629485",
      "#85a897",
      "#a7bcaa",
      "#c9d0bd",
      "#ece5d1",
      "#e7c7ad",
      "#e0a98b",
      "#d68b69",
      "#ca6d49",
      "#bc4e29",
    ],
  },
  {
    colors1: [
      {
        id: "1",
        color: "#d6692a",
      },
      {
        id: "3",
        color: "#f7f7f7",
      },
    ],
    colors2: [
      {
        id: "4",
        color: "#f7f7f7",
      },
      {
        color: "#594094",
        id: "0.1183321216195754",
      },
    ],
    numColors: "11",
    mode: "diverging",
    correctLightness: false,
    bezier: true,
    steps: [
      "#d6692a",
      "#e28553",
      "#eca27a",
      "#f3bea3",
      "#f7dacc",
      "#f7f7f7",
      "#d8d0e3",
      "#b8aacf",
      "#9985bc",
      "#7a62a8",
      "#594094",
    ],
  },
];

export default presets;
