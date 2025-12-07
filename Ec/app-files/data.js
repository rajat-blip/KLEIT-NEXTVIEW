var APP_DATA = {
  "scenes": [
    {
      "id": "0-e--c-department",
      "name": "E & C Department",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.46733420164691,
        "pitch": -0.3700297342960077,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": -0.13485712520259163,
          "pitch": 0.08268180140453296,
          "rotation": 0,
          "target": "1-e--c-main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-e--c-main",
      "name": "E & C main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01472726617079978,
          "pitch": 0.1663334632331619,
          "rotation": 1.5707963267948966,
          "target": "2-e--c-main-1"
        },
        {
          "yaw": 3.096628609385382,
          "pitch": 0.30030361739763123,
          "rotation": 0,
          "target": "0-e--c-department"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-e--c-main-1",
      "name": "E & C main 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9556974896199026,
          "pitch": 0.3107047503651881,
          "rotation": 7.0685834705770345,
          "target": "3-e--c-main-stairs"
        },
        {
          "yaw": 1.6729303511146982,
          "pitch": 0.06939751504694769,
          "rotation": 0,
          "target": "5-e--c-ground-labs-"
        },
        {
          "yaw": 3.1368192273716744,
          "pitch": 0.30255915819777357,
          "rotation": 0,
          "target": "1-e--c-main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-e--c-main-stairs",
      "name": "E & C main stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.292114783709925,
          "pitch": 0.31897852633702684,
          "rotation": 0,
          "target": "2-e--c-main-1"
        },
        {
          "yaw": -1.5313030434999142,
          "pitch": 0.09799859836574498,
          "rotation": 0,
          "target": "5-e--c-ground-labs-"
        },
        {
          "yaw": -0.05884529979952191,
          "pitch": -0.10546761346488864,
          "rotation": 0,
          "target": "4-e--c-main-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-e--c-main-stairs-1",
      "name": "E & C main stairs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3502064303475887,
          "pitch": -0.041479216081121706,
          "rotation": 0,
          "target": "9-e--c-1st-floor--"
        },
        {
          "yaw": 0.10273535843312942,
          "pitch": 0.4738135378678301,
          "rotation": 0,
          "target": "3-e--c-main-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-e--c-ground-labs-",
      "name": "E & C ground labs ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9060720318564233,
          "pitch": 0.07857377545721533,
          "rotation": 0,
          "target": "2-e--c-main-1"
        },
        {
          "yaw": 2.5462177019445926,
          "pitch": 0.09742597290719601,
          "rotation": 4.71238898038469,
          "target": "3-e--c-main-stairs"
        },
        {
          "yaw": -0.373394711776184,
          "pitch": 0.2264348291482179,
          "rotation": 0,
          "target": "6-e--c-ground-labs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7401919456550932,
          "pitch": -0.27731429821639964,
          "title": "Microcontroller / HDL Lab",
          "text": "The Microcontroller and HDL Lab provides hands-on training in embedded systems and digital design, enabling students to program microcontrollers and develop hardware logic using HDL tools for real-time applications."
        }
      ]
    },
    {
      "id": "6-e--c-ground-labs-1",
      "name": "E & C ground labs 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0617802421260496,
          "pitch": 0.2393459745912203,
          "rotation": 0,
          "target": "7-e--c-ground-labs-2"
        },
        {
          "yaw": -3.1235099031524776,
          "pitch": 0.24676123801643968,
          "rotation": 0,
          "target": "5-e--c-ground-labs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-e--c-ground-labs-2",
      "name": "E & C ground labs 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4280177285464184,
          "pitch": 0.2538243962650526,
          "rotation": 0,
          "target": "6-e--c-ground-labs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7134118438482107,
          "pitch": -0.2628386883857736,
          "title": "<strong data-start=\"46\" data-end=\"77\">VLSI / Embedded Systems Lab</strong>",
          "text": "The VLSI and Embedded Systems Lab offers practical training in chip design and embedded applications, equipped with industry-standard tools that help students design, simulate, and implement real-time hardware systems."
        },
        {
          "yaw": 0.06320682837091596,
          "pitch": -0.27564850992741086,
          "title": "<strong data-start=\"46\" data-end=\"66\">Main Server Room</strong>",
          "text": "The Main Server Room houses the core IT infrastructure, ensuring secure data storage, network management, and uninterrupted digital services for the entire campus through well-maintained servers and monitoring systems."
        }
      ]
    },
    {
      "id": "8-e--c-ground-labs-end",
      "name": "E & C ground labs end",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-e--c-1st-floor--",
      "name": "E & C 1st floor  ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7425096167617369,
          "pitch": -0.1231781826945646,
          "rotation": 0,
          "target": "14-e--c-1st-floor-stairs"
        },
        {
          "yaw": 0.926146548807786,
          "pitch": 0.39886250212300567,
          "rotation": 0,
          "target": "4-e--c-main-stairs-1"
        },
        {
          "yaw": -0.6664514174993705,
          "pitch": 0.14257749948573206,
          "rotation": 0,
          "target": "10-e--c-1st-floor--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-e--c-1st-floor--1",
      "name": "E & C 1st floor  1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9470507292856514,
          "pitch": 0.23163445422441598,
          "rotation": 4.71238898038469,
          "target": "9-e--c-1st-floor--"
        },
        {
          "yaw": -0.2453380818825739,
          "pitch": 0.1725710692439666,
          "rotation": 0,
          "target": "11-e--c-1st-floor--2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-e--c-1st-floor--2",
      "name": "E & C 1st floor  2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.521868768423561,
          "pitch": 0.21452412731093773,
          "rotation": 0,
          "target": "10-e--c-1st-floor--1"
        },
        {
          "yaw": -0.6554375753321278,
          "pitch": 0.2470564097035748,
          "rotation": 0,
          "target": "12-e--c-1st-floor--3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5587246569254578,
          "pitch": -0.41157466658415487,
          "title": "Advanced Communication / LD Lab",
          "text": "The Advanced Communication and LD Lab provides practical exposure to communication systems and logic design, equipped with trainer kits and simulation tools that help students understand modulation, coding, and digital circuit concepts."
        }
      ]
    },
    {
      "id": "12-e--c-1st-floor--3",
      "name": "E & C 1st floor  3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0143336387702533,
          "pitch": 0.29282079430646135,
          "rotation": 0,
          "target": "11-e--c-1st-floor--2"
        },
        {
          "yaw": -0.048701202389484166,
          "pitch": 0.152189980051606,
          "rotation": 0,
          "target": "13-e--c-1st-floor--end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-e--c-1st-floor--end",
      "name": "E & C 1st floor  end",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9436992854229374,
          "pitch": 0.28553860685114785,
          "rotation": 0,
          "target": "12-e--c-1st-floor--3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3179357718545841,
          "pitch": -0.21676473290126452,
          "title": "Staff Room",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"9f408dc6-4a61-4459-b09c-afbb2460db63\" data-testid=\"conversation-turn-72\" data-scroll-anchor=\"false\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"9f408dc6-4a61-4459-b09c-afbb2460db63\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"63\" data-end=\"246\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"63\" data-end=\"246\" data-is-last-node=\"\">The Staff Room provides a comfortable and organized space for faculty to work, discuss, and prepare academic activities, offering a calm environment for meetings and short breaks.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div></div></div></article><article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-(--header-height)\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"e3395023-322c-48ce-9e5a-65325d7bd662\" data-testid=\"conversation-turn-73\" data-scroll-anchor=\"false\" data-turn=\"user\"><h5 class=\"sr-only\"></h5></article>"
        }
      ]
    },
    {
      "id": "14-e--c-1st-floor-stairs",
      "name": "E & C 1st floor stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06114073935244946,
          "pitch": -0.0530478269834358,
          "rotation": 0,
          "target": "15-e--c-2nd-floor-stairs"
        },
        {
          "yaw": 0.4236219105068866,
          "pitch": 0.47791883905707166,
          "rotation": 0,
          "target": "9-e--c-1st-floor--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-e--c-2nd-floor-stairs",
      "name": "E & C 2nd floor stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4223091891499777,
          "pitch": -0.0053879998548662655,
          "rotation": 0,
          "target": "19-e--c-3rd-floor-stairs"
        },
        {
          "yaw": -2.954903773598687,
          "pitch": 0.2676162691332209,
          "rotation": 0,
          "target": "16-e--c-2nd-floor-"
        },
        {
          "yaw": -0.7778215762589173,
          "pitch": 0.46154033735032485,
          "rotation": 6.283185307179586,
          "target": "14-e--c-1st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-e--c-2nd-floor-",
      "name": "E & C 2nd floor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.111550371784526,
          "pitch": 0.2987035543520591,
          "rotation": 0,
          "target": "15-e--c-2nd-floor-stairs"
        },
        {
          "yaw": 0.04065255612504082,
          "pitch": 0.16569394035007257,
          "rotation": 0,
          "target": "17-e--c-2nd-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-e--c-2nd-floor-1",
      "name": "E & C 2nd floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.97707465784255,
          "pitch": 0.2978213752198542,
          "rotation": 0,
          "target": "16-e--c-2nd-floor-"
        },
        {
          "yaw": -0.13621202073740335,
          "pitch": 0.15252574732032542,
          "rotation": 0,
          "target": "18-e--c-2nd-floor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5118686985829735,
          "pitch": -0.4358875365699948,
          "title": "Electronics Circuit Lab",
          "text": "The Electronics Circuit Lab helps students understand basic electronic components and circuit behavior through hands-on experiments, providing well-equipped benches for designing, testing, and analyzing analog and digital circuits."
        }
      ]
    },
    {
      "id": "18-e--c-2nd-floor-2",
      "name": "E & C 2nd floor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8396833070949956,
          "pitch": 0.3924826655121514,
          "rotation": 0,
          "target": "17-e--c-2nd-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-e--c-3rd-floor-stairs",
      "name": "E & C 3rd floor stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2918768011576294,
          "pitch": -1.2922836134521276e-8,
          "rotation": 0,
          "target": "20-e--c-3rd-floor-"
        },
        {
          "yaw": 0.2230432117554777,
          "pitch": 0.5171565655138597,
          "rotation": 0,
          "target": "15-e--c-2nd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-e--c-3rd-floor-",
      "name": "E & C 3rd floor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03533328323180385,
          "pitch": 0.4733801053669726,
          "rotation": 0,
          "target": "19-e--c-3rd-floor-stairs"
        },
        {
          "yaw": -1.8437357720278804,
          "pitch": 0.25953830726621163,
          "rotation": 0,
          "target": "21-e--c-3rd-samsung-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-e--c-3rd-samsung-lab",
      "name": "E & C 3rd SamSung Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02944814664810025,
          "pitch": 0.128835381680398,
          "rotation": 0,
          "target": "20-e--c-3rd-floor-"
        },
        {
          "yaw": -3.1298035544144813,
          "pitch": 0.232206848909442,
          "rotation": 0,
          "target": "22-e--c-3rd-samsung-lab-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0655450704812939,
          "pitch": -0.40646938252478826,
          "title": "Samsung Innovation Campus&nbsp;",
          "text": "<p class=\"MsoNormal\" align=\"left\"><strong><span style=\"font-size:12.0pt;line-height:150%\">Samsung Innovation Campus at KLEIT\ngives students and faculty access to training in cutting-edge areas like\nMachine Learning, Artificial Intelligence, Data Science, Coding &amp;\nProgramming, and more — helping them gain industry-ready skills through\nhands-on projects and expert mentorship.</span></strong><span style=\"font-size:\n12.0pt;line-height:150%;font-family:&quot;Times New Roman&quot;,serif\"><o:p></o:p></span></p>"
        }
      ]
    },
    {
      "id": "22-e--c-3rd-samsung-lab-1",
      "name": "E & C 3rd SamSung Lab 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.116488701471596,
          "pitch": 0.28247112064872226,
          "rotation": 0,
          "target": "23-e--c-3rd-floor-end"
        },
        {
          "yaw": 0.1346804326393567,
          "pitch": 0.4127025731933145,
          "rotation": 0,
          "target": "21-e--c-3rd-samsung-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-e--c-3rd-floor-end",
      "name": "E & C 3rd floor end",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.028977908895965854,
          "pitch": 0.16058227660064261,
          "rotation": 0,
          "target": "24-e--c-3rd-floor-end-1"
        },
        {
          "yaw": 2.7849604696480155,
          "pitch": 0.31536042930445696,
          "rotation": 0,
          "target": "22-e--c-3rd-samsung-lab-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-e--c-3rd-floor-end-1",
      "name": "E & C 3rd floor end 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.318413696351927,
          "pitch": 0.17669469695153595,
          "rotation": 0,
          "target": "23-e--c-3rd-floor-end"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6086435660855525,
          "pitch": -0.3728920162898124,
          "title": "<strong data-start=\"46\" data-end=\"82\">DSP / Computer Network Lab</strong>",
          "text": "The DSP and Computer Network Lab provides hands-on experience in signal processing and networking concepts, equipped with simulation tools and hardware setups that help students understand real-time digital systems and communication networks."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
