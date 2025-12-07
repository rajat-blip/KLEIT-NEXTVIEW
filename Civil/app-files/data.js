var APP_DATA = {
  "scenes": [
    {
      "id": "0-civil-department",
      "name": "Civil Department",
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
        "yaw": -0.05079367514822408,
        "pitch": -0.02136203805052972,
        "fov": 0.8447575676013421
      },
      "linkHotspots": [
        {
          "yaw": -0.061733276957493644,
          "pitch": 0.2496981918509089,
          "rotation": 0,
          "target": "1-civil-main-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13102108285017522,
          "pitch": -0.1496352533835541,
          "title": "Civil Department&nbsp;",
          "text": "The Civil Engineering Department at KLEIT provides a strong academic foundation supported by well-equipped laboratories and experienced faculty. The department focuses on practical learning, design skills, and field-based knowledge, preparing students for careers in construction, infrastructure, and environmental engineering."
        }
      ]
    },
    {
      "id": "1-civil-main-",
      "name": "Civil Main ",
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
          "yaw": -0.7472626706185981,
          "pitch": 0.2474296963501743,
          "rotation": 0,
          "target": "2-civil-main-1"
        },
        {
          "yaw": 0.0026277367921974104,
          "pitch": 0.20832873530957485,
          "rotation": 0,
          "target": "5-civil-ground-level"
        },
        {
          "yaw": 1.4366754357566514,
          "pitch": 0.07800194189680454,
          "rotation": 5.497787143782138,
          "target": "15-civil-floor-stairs--"
        },
        {
          "yaw": -2.8595374058881653,
          "pitch": 0.37763316400837255,
          "rotation": 0,
          "target": "0-civil-department"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-civil-main-1",
      "name": "Civil Main 1",
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
          "yaw": 0.20051999147118948,
          "pitch": 0.13201300068619304,
          "rotation": 0,
          "target": "3-civil-main-2"
        },
        {
          "yaw": 2.2227670774744945,
          "pitch": 0.37549686438497076,
          "rotation": 4.71238898038469,
          "target": "1-civil-main-"
        },
        {
          "yaw": 1.1132496944094044,
          "pitch": 0.31562201802807266,
          "rotation": 5.497787143782138,
          "target": "5-civil-ground-level"
        },
        {
          "yaw": 2.066102216128832,
          "pitch": 0.057991457224115806,
          "rotation": 0,
          "target": "15-civil-floor-stairs--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-civil-main-2",
      "name": "Civil Main 2",
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
          "yaw": -0.3053303183826319,
          "pitch": 0.15604838004339072,
          "rotation": 0,
          "target": "4-civil-main-3"
        },
        {
          "yaw": 2.7615756854799702,
          "pitch": 0.2029576275543512,
          "rotation": 0,
          "target": "2-civil-main-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-civil-main-3",
      "name": "Civil Main 3",
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
          "yaw": 2.60286801619605,
          "pitch": 0.2021669319250936,
          "rotation": 0,
          "target": "3-civil-main-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8919901820787608,
          "pitch": -0.12842999197783023,
          "title": "Men's Washroom",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-civil-ground-level",
      "name": "Civil ground level",
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
          "yaw": 0.3969809845968424,
          "pitch": 0.5085513669114903,
          "rotation": 0,
          "target": "6-civil-ground-level-1"
        },
        {
          "yaw": -2.644456976699148,
          "pitch": 0.2746903213070997,
          "rotation": 0,
          "target": "1-civil-main-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-civil-ground-level-1",
      "name": "Civil ground level 1",
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
          "yaw": 0.010732097906615223,
          "pitch": 0.23655180027737366,
          "rotation": 0,
          "target": "7-civil-ground-level-2-"
        },
        {
          "yaw": -2.9088107293284207,
          "pitch": 0.08790222979529716,
          "rotation": 0,
          "target": "5-civil-ground-level"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2560430711709749,
          "pitch": 0.48199635384411366,
          "title": "Sir M. Visvesvaraya",
          "text": "Sir M. Visvesvaraya was a renowned Indian engineer and statesman known for his brilliant contributions to irrigation, flood control, and infrastructure development. A pioneer in engineering, he played a key role in building dams, developing industries, and modernizing India, earning him the title “Father of Modern Engineering.”"
        }
      ]
    },
    {
      "id": "7-civil-ground-level-2-",
      "name": "Civil ground level 2 ",
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
          "yaw": -0.05915174056341321,
          "pitch": 0.3193332380518985,
          "rotation": 0,
          "target": "8-civil-ground-level-end-"
        },
        {
          "yaw": -2.923896278697363,
          "pitch": 0.2548109924594364,
          "rotation": 0,
          "target": "6-civil-ground-level-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-civil-ground-level-end-",
      "name": "Civil ground level end ",
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
          "yaw": -3.0126916611277803,
          "pitch": 0.4257925614555802,
          "rotation": 0,
          "target": "9-civil-ground-labs"
        },
        {
          "yaw": -1.4941722517713707,
          "pitch": -0.05589188226078967,
          "rotation": 0,
          "target": "7-civil-ground-level-2-"
        },
        {
          "yaw": 0.14334841299676881,
          "pitch": 0.3339446035550502,
          "rotation": 0.7853981633974483,
          "target": "10-civil-ground-lobby"
        },
        {
          "yaw": -0.8713425490139528,
          "pitch": 0.2046267093515155,
          "rotation": 5.497787143782138,
          "target": "14-civil-ground-end-"
        },
        {
          "yaw": 0.21608427111642037,
          "pitch": 0.13107503167907808,
          "rotation": 0,
          "target": "12-civil-ground-lab-2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-civil-ground-labs",
      "name": "Civil ground labs",
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
          "yaw": 2.2016623388092054,
          "pitch": 0.4986486284768006,
          "rotation": 0,
          "target": "8-civil-ground-level-end-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6685167401935672,
          "pitch": -0.4537136713683587,
          "title": "Geotechnical Engineering",
          "text": "The Geotechnical Engineering Lab allows students to test and study soil properties using essential equipment, helping them understand foundation and soil behavior in practical applications."
        },
        {
          "yaw": -2.4354856623955037,
          "pitch": -0.5289465371924038,
          "title": "Fluid Mechanics &amp; Machines",
          "text": "The Fluid Mechanics &amp; Machines Lab helps students understand the behavior of fluids and the working of hydraulic machines through practical experiments, using well-equipped setups for flow measurement, pumps, turbines, and related studies."
        }
      ]
    },
    {
      "id": "10-civil-ground-lobby",
      "name": "Civil ground lobby",
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
          "yaw": 0.6891483280522728,
          "pitch": 0.21282277242972114,
          "rotation": 0,
          "target": "11-civil-ground-lobby-1"
        },
        {
          "yaw": -3.020580170850252,
          "pitch": 0.35699769397472636,
          "rotation": 0,
          "target": "8-civil-ground-level-end-"
        },
        {
          "yaw": -2.3172074504801685,
          "pitch": 0.22252305916581783,
          "rotation": 0,
          "target": "14-civil-ground-end-"
        },
        {
          "yaw": -1.3676040017432598,
          "pitch": 0.5050311151006461,
          "rotation": 0,
          "target": "12-civil-ground-lab-2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-civil-ground-lobby-1",
      "name": "Civil ground lobby 1",
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
          "yaw": -0.15615037907274143,
          "pitch": 0.20925482338162382,
          "rotation": 0,
          "target": "10-civil-ground-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-civil-ground-lab-2-",
      "name": "Civil ground lab 2 ",
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
          "yaw": 0.023560974511999788,
          "pitch": 0.24804143781929966,
          "rotation": 0,
          "target": "13-civil-ground-lab-2-end"
        },
        {
          "yaw": -2.918230822428974,
          "pitch": 0.21486512872816732,
          "rotation": 0,
          "target": "8-civil-ground-level-end-"
        },
        {
          "yaw": -2.0753302327118224,
          "pitch": 0.18973874887148412,
          "rotation": 0.7853981633974483,
          "target": "14-civil-ground-end-"
        },
        {
          "yaw": 2.6609923025565756,
          "pitch": 0.3642177318812472,
          "rotation": 5.497787143782138,
          "target": "10-civil-ground-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-civil-ground-lab-2-end",
      "name": "Civil ground lab 2 end",
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
          "yaw": 2.6687762595837876,
          "pitch": -0.10541634103294228,
          "rotation": 0,
          "target": "12-civil-ground-lab-2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9608371938235329,
          "pitch": -0.3134090575266075,
          "title": "Concrete &amp; High Materials",
          "text": "The Concrete &amp; High Strength Materials Lab enables students to test the properties of cement, aggregates, and concrete, using advanced equipment to study strength, durability, and performance of modern construction materials"
        },
        {
          "yaw": -0.8256143253257839,
          "pitch": -0.023130544042169632,
          "title": "Estate Office",
          "text": "The Estate Office manages the campus infrastructure, ensuring proper maintenance of buildings, facilities, and utilities. It serves as a central point for coordinating repairs, upkeep, and overall campus development."
        }
      ]
    },
    {
      "id": "14-civil-ground-end-",
      "name": "Civil ground end ",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.596060092084109,
          "pitch": 0.21963926257220834,
          "rotation": 0,
          "target": "8-civil-ground-level-end-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7376966716866171,
          "pitch": -0.1553874725354767,
          "title": "Students’ Resting Space",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-6931c3a4-13dc-8321-a673-a84b7a11d8b8-7\" data-testid=\"conversation-turn-44\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"7488d041-5404-428c-8756-55541b867d70\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"82\" data-end=\"264\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"82\" data-end=\"264\" data-is-last-node=\"\">The resting space for Civil students offers a quiet and comfortable area to relax between classes, providing seating and a calm environment for short breaks or group discussions.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "15-civil-floor-stairs--",
      "name": "Civil floor stairs  ",
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
          "yaw": -2.3574716529141497,
          "pitch": 0.4940677030473424,
          "rotation": 1.5707963267948966,
          "target": "1-civil-main-"
        },
        {
          "yaw": -0.7088043199385261,
          "pitch": -0.030901833173775373,
          "rotation": 0,
          "target": "16-civil-floor-stairs-1"
        },
        {
          "yaw": -2.249546008634896,
          "pitch": 0.22381590573070653,
          "rotation": 0.7853981633974483,
          "target": "2-civil-main-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6194611588444179,
          "pitch": -0.41164901627040607,
          "title": "<strong data-start=\"46\" data-end=\"62\">Seminar Hall</strong>",
          "text": "The Seminar Hall provides a spacious and well-equipped environment for presentations, workshops, and guest lectures, featuring comfortable seating and modern audio-visual facilities to support effective learning and interaction"
        }
      ]
    },
    {
      "id": "16-civil-floor-stairs-1",
      "name": "Civil floor stairs 1",
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
          "yaw": 0.22809737775556194,
          "pitch": -0.010571772065819829,
          "rotation": 0,
          "target": "17-civil-floor-stairs-2"
        },
        {
          "yaw": -2.8740513106495698,
          "pitch": 0.5927177000488424,
          "rotation": 7.0685834705770345,
          "target": "15-civil-floor-stairs--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-civil-floor-stairs-2",
      "name": "Civil floor stairs 2",
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
          "yaw": 0.1387354728811161,
          "pitch": 0.2914643963856385,
          "rotation": 0.7853981633974483,
          "target": "18-civil-1st-floor-"
        },
        {
          "yaw": -1.2582208085751123,
          "pitch": 0.28799120571474646,
          "rotation": 5.497787143782138,
          "target": "20-civil-1st-floor-lobby-1"
        },
        {
          "yaw": 3.065860688399181,
          "pitch": 0.5859474431556357,
          "rotation": 0,
          "target": "16-civil-floor-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-civil-1st-floor-",
      "name": "Civil 1st floor ",
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
          "yaw": -2.837720409704195,
          "pitch": 0.32508517075393684,
          "rotation": 0,
          "target": "20-civil-1st-floor-lobby-1"
        },
        {
          "yaw": 0.5805356194767519,
          "pitch": 0.48117727628801177,
          "rotation": 0,
          "target": "19-civil-1st-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-civil-1st-floor-stairs",
      "name": "Civil 1st floor stairs",
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
          "yaw": 1.4330602561141692,
          "pitch": 0.23890403511657965,
          "rotation": 5.497787143782138,
          "target": "17-civil-floor-stairs-2"
        },
        {
          "yaw": 2.1490713442144695,
          "pitch": 0.21301343357258773,
          "rotation": 0,
          "target": "21-civil-1st-floor-lobby-2"
        },
        {
          "yaw": -0.41358876235889497,
          "pitch": -0.024270826846157334,
          "rotation": 0,
          "target": "23-civil-2nd-floor-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0397193158783722,
          "pitch": -0.3344730424104494,
          "title": "Computer Aided Design",
          "text": "The Computer Aided Design Lab helps civil students learn drafting and modeling using software like AutoCAD and STAAD, enabling them to create accurate plans, drawings, and structural designs for real-world engineering projects."
        }
      ]
    },
    {
      "id": "20-civil-1st-floor-lobby-1",
      "name": "Civil 1st floor lobby 1",
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
          "yaw": -2.819376415906431,
          "pitch": 0.26798494720745225,
          "rotation": 7.0685834705770345,
          "target": "17-civil-floor-stairs-2"
        },
        {
          "yaw": 2.805522986578074,
          "pitch": 0.2133806050441578,
          "rotation": 6.283185307179586,
          "target": "18-civil-1st-floor-"
        },
        {
          "yaw": -0.036588277174729456,
          "pitch": 0.2138033815359961,
          "rotation": 0,
          "target": "21-civil-1st-floor-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-civil-1st-floor-lobby-2",
      "name": "Civil 1st floor lobby 2",
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
          "yaw": -2.2655404160810626,
          "pitch": 0.20123959073078623,
          "rotation": 0,
          "target": "22-civil-1st-floor-lobby-3"
        },
        {
          "yaw": -0.4045586420349849,
          "pitch": 0.2924130073970943,
          "rotation": 0,
          "target": "20-civil-1st-floor-lobby-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-civil-1st-floor-lobby-3",
      "name": "Civil 1st floor lobby 3",
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
          "yaw": 2.86369813803023,
          "pitch": 0.2954834795333632,
          "rotation": 5.497787143782138,
          "target": "21-civil-1st-floor-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-civil-2nd-floor-stairs",
      "name": "Civil 2nd floor stairs",
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
          "yaw": -0.2777339963590908,
          "pitch": 0.4441241159812037,
          "rotation": 0,
          "target": "19-civil-1st-floor-stairs"
        },
        {
          "yaw": 0.05590933103859541,
          "pitch": -0.08216430403157204,
          "rotation": 0,
          "target": "24-civil-2nd-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-civil-2nd-floor-",
      "name": "Civil 2nd floor ",
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
          "yaw": 1.4234777795474933,
          "pitch": 0.3769377786561936,
          "rotation": 0.7853981633974483,
          "target": "25-civil-2nd-floor-1"
        },
        {
          "yaw": 0.4258044441267401,
          "pitch": 0.2589357211680259,
          "rotation": 0,
          "target": "31-civil-2nd-floor-end"
        },
        {
          "yaw": -2.399998882254753,
          "pitch": 0.5176626978413292,
          "rotation": 0,
          "target": "23-civil-2nd-floor-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-civil-2nd-floor-1",
      "name": "Civil 2nd floor 1",
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
          "yaw": -0.5822417824317458,
          "pitch": 0.1756492209698628,
          "rotation": 0,
          "target": "26-civil-2nd-floor-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-civil-2nd-floor-lab",
      "name": "Civil 2nd floor lab",
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
          "yaw": -1.5133094840505734,
          "pitch": 0.2691267048644015,
          "rotation": 0,
          "target": "27-civil-2nd-floor-lab-1"
        },
        {
          "yaw": 3.065246134040251,
          "pitch": 0.12961763303129814,
          "rotation": 0,
          "target": "25-civil-2nd-floor-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2800239851349513,
          "pitch": -0.17719293313000506,
          "title": "Enventure engineering lab",
          "text": "The Enventure Engineering LLP – Center for Advanced Digital Construction provides students with industry-focused training in digital construction tools, offering hands-on experience in BIM, 3D modeling, and modern construction technologies. It serves as a specialized space for learning advanced digital workflows used in today’s engineering and infrastructure projects"
        }
      ]
    },
    {
      "id": "27-civil-2nd-floor-lab-1",
      "name": "Civil 2nd floor lab 1",
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
          "yaw": -0.2355084691611573,
          "pitch": 0.271937463473801,
          "rotation": 5.497787143782138,
          "target": "28-civil-2nd-floor-lab-2"
        },
        {
          "yaw": -2.9804383410818556,
          "pitch": 0.2496685655713442,
          "rotation": 0,
          "target": "26-civil-2nd-floor-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-civil-2nd-floor-lab-2",
      "name": "Civil 2nd floor lab 2",
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
          "yaw": -3.03879794904611,
          "pitch": 0.3931397462953541,
          "rotation": 0,
          "target": "27-civil-2nd-floor-lab-1"
        },
        {
          "yaw": -0.9645672827494849,
          "pitch": 0.295176392592305,
          "rotation": 5.497787143782138,
          "target": "29-civil-2nd-floor-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2188036138610236,
          "pitch": -0.3564861087688733,
          "title": "Environmental Engineering",
          "text": "Environmental Engineering in the Civil Department focuses on water treatment, air quality, waste management, and sustainable practices. It helps students understand methods to protect the environment through practical experiments and real-world applications."
        }
      ]
    },
    {
      "id": "29-civil-2nd-floor-lobby",
      "name": "Civil 2nd floor lobby",
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
          "yaw": -3.1037678701387392,
          "pitch": 0.19413402107212008,
          "rotation": 0,
          "target": "28-civil-2nd-floor-lab-2"
        },
        {
          "yaw": -0.08502904752619322,
          "pitch": 0.14201067736773965,
          "rotation": 0,
          "target": "30-civil-2nd-floor-lobby-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-civil-2nd-floor-lobby-1",
      "name": "Civil 2nd floor lobby 1",
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
          "yaw": -0.7042505282499345,
          "pitch": 0.2522627921261673,
          "rotation": 0,
          "target": "31-civil-2nd-floor-end"
        },
        {
          "yaw": -2.5876730777593195,
          "pitch": 0.20661018227341899,
          "rotation": 0,
          "target": "29-civil-2nd-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-civil-2nd-floor-end",
      "name": "Civil 2nd floor end",
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
          "yaw": -0.02944813734294982,
          "pitch": 0.19760540110304348,
          "rotation": 0,
          "target": "24-civil-2nd-floor-"
        }
      ],
      "infoHotspots": []
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
