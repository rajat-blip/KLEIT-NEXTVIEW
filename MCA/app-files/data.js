var APP_DATA = {
  "scenes": [
    {
      "id": "0-mca-enterance",
      "name": "MCA ENTERANCE",
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
        "yaw": 0.11256404637501305,
        "pitch": 0.04917872933890699,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.12951723526555448,
          "pitch": 0.477017437275876,
          "rotation": 0,
          "target": "1-mca-main"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.962370840991241,
          "pitch": -0.16142004794601306,
          "title": "MCA Department Notice Board",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-mca-main",
      "name": "MCA MAIN",
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
          "yaw": -0.7815167198988213,
          "pitch": 0.47051131442348826,
          "rotation": 4.71238898038469,
          "target": "2-staff-room"
        },
        {
          "yaw": 3.0212994011244128,
          "pitch": 0.5291787224642928,
          "rotation": 0,
          "target": "0-mca-enterance"
        },
        {
          "yaw": 1.1190427750174443,
          "pitch": 0.3986100086357336,
          "rotation": 7.0685834705770345,
          "target": "3-lobby1-"
        },
        {
          "yaw": 0.41394097905696725,
          "pitch": 0.3638748022548519,
          "rotation": 0,
          "target": "12-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-staff-room",
      "name": "STAFF ROOM",
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
          "yaw": -2.699496812892928,
          "pitch": 0.4906520992702621,
          "rotation": 7.853981633974483,
          "target": "1-mca-main"
        },
        {
          "yaw": 3.1360024429470936,
          "pitch": 0.24012410010121954,
          "rotation": 0,
          "target": "3-lobby1-"
        },
        {
          "yaw": 2.7129578265916923,
          "pitch": 0.3530437035560432,
          "rotation": 5.497787143782138,
          "target": "12-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lobby1-",
      "name": "LOBBY1 ",
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
        "yaw": -1.6673893151953223,
        "pitch": 0.11974075955207297,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.0675445635094647,
          "pitch": 0.37344603080247474,
          "rotation": 0,
          "target": "4-lobby-2"
        },
        {
          "yaw": -2.030541401158718,
          "pitch": 0.5755436447369373,
          "rotation": 12.566370614359176,
          "target": "12-corridor-1"
        },
        {
          "yaw": 3.087630060415144,
          "pitch": 0.2678785707427167,
          "rotation": 0,
          "target": "2-staff-room"
        },
        {
          "yaw": 1.5932534250526658,
          "pitch": 0.48675244931794737,
          "rotation": 0,
          "target": "11-computer-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2453546799720172,
          "pitch": -0.3562861905826722,
          "title": "<p><b><span style=\"font-size:14.0pt\">MCA COMPUTER LAB<o:p></o:p></span></b></p>",
          "text": "<p class=\"MsoNormal\">The <strong data-start=\"262\" data-end=\"282\"><span style=\"font-weight:normal\">MCA Computer Lab</span></strong> is a well-equipped,\nmodern facility designed to support the academic and project needs of\npostgraduate students in the <strong data-start=\"402\" data-end=\"443\"><span style=\"font-weight:normal\">Master of Computer Applications (MCA)</span></strong>\nprogram.<o:p></o:p></p>"
        }
      ]
    },
    {
      "id": "4-lobby-2",
      "name": "lobby 2",
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
          "yaw": -0.009573645191622404,
          "pitch": 0.38014318406163383,
          "rotation": 0,
          "target": "5-lobby-3"
        },
        {
          "yaw": 2.6856369561351414,
          "pitch": 0.31267392791589543,
          "rotation": 5.497787143782138,
          "target": "11-computer-lab"
        },
        {
          "yaw": 3.0750879401217492,
          "pitch": 0.3917755184840992,
          "rotation": 0,
          "target": "3-lobby1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lobby-3",
      "name": "lobby 3",
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
          "yaw": -0.014727312726828146,
          "pitch": 0.3344910407392252,
          "rotation": 0,
          "target": "6-lobby-4"
        },
        {
          "yaw": 2.9131929159220267,
          "pitch": 0.35667193385086726,
          "rotation": 0,
          "target": "4-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lobby-4",
      "name": "lobby 4",
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
          "yaw": -0.008836768580447796,
          "pitch": 0.3501936636591694,
          "rotation": 0,
          "target": "7-lobby-5"
        },
        {
          "yaw": 2.921521916432482,
          "pitch": 0.42115921710291815,
          "rotation": 0,
          "target": "5-lobby-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lobby-5",
      "name": "lobby 5",
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
          "yaw": 0.04709580484602327,
          "pitch": 0.32628145861859714,
          "rotation": 0,
          "target": "8-lobby-classroom"
        },
        {
          "yaw": 3.1371031186905327,
          "pitch": 0.35276910511120363,
          "rotation": 0,
          "target": "6-lobby-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lobby-classroom",
      "name": "lobby classroom",
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
          "yaw": 0.05884538518484561,
          "pitch": 0.2393866257904893,
          "rotation": 0,
          "target": "9-lobby-end"
        },
        {
          "yaw": 1.0394602946555604,
          "pitch": 0.4443906571785501,
          "rotation": 7.0685834705770345,
          "target": "10-classroom"
        },
        {
          "yaw": 3.06951149026818,
          "pitch": 0.3590620258631194,
          "rotation": 0,
          "target": "7-lobby-5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7535145938504257,
          "pitch": -0.3135921184001855,
          "title": "<p class=\"MsoNormal\"><b><span style=\"font-size:16.0pt;line-height:107%;\nfont-family:&quot;Times New Roman&quot;,serif\">MCA CLASSROOM<o:p></o:p></span></b></p>",
          "text": "<p><span style=\"font-size: 14pt; font-family: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;\">MCA classrooms are spacious, tech-enabled,\nand designed for interactive, student-centered learning with smart boards,\nprojectors, and Wi-Fi connectivity.</span></p>"
        }
      ]
    },
    {
      "id": "9-lobby-end",
      "name": "lobby end",
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
          "yaw": 2.5918650539873216,
          "pitch": 0.34248666504791103,
          "rotation": 4.71238898038469,
          "target": "10-classroom"
        },
        {
          "yaw": 3.0124245312540534,
          "pitch": 0.3598217814339151,
          "rotation": 0,
          "target": "8-lobby-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-classroom",
      "name": "classroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6591290496342204,
          "pitch": 0.11131190904432486,
          "rotation": 1.5707963267948966,
          "target": "8-lobby-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-computer-lab",
      "name": "computer lab",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1173536862060622,
        "pitch": 0.10850218868693418,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": -2.3312714173690896,
          "pitch": 0.013673837969722769,
          "rotation": 1.5707963267948966,
          "target": "3-lobby1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-corridor-1",
      "name": "corridor 1",
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
          "yaw": 0.125992967415419,
          "pitch": 0.34764870213465393,
          "rotation": 0,
          "target": "13-corridor-2"
        },
        {
          "yaw": -2.144687516815601,
          "pitch": 0.3992317612953755,
          "rotation": 1.5707963267948966,
          "target": "2-staff-room"
        },
        {
          "yaw": -2.82334601384969,
          "pitch": 0.5460191627512359,
          "rotation": 0,
          "target": "1-mca-main"
        },
        {
          "yaw": 2.535666278382804,
          "pitch": 0.3208539979977143,
          "rotation": 0,
          "target": "11-computer-lab"
        },
        {
          "yaw": 1.812483524847707,
          "pitch": 0.25010723999865725,
          "rotation": 5.497787143782138,
          "target": "4-lobby-2"
        },
        {
          "yaw": 2.210287991330569,
          "pitch": 0.5117363362265621,
          "rotation": 4.71238898038469,
          "target": "3-lobby1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3886154544794014,
          "pitch": -0.1762504990692939,
          "title": "<p><b><span style=\"font-size:14.0pt\">MCA COMPUTER LAB<o:p></o:p></span></b></p>",
          "text": "The&nbsp;<strong data-start=\"262\" data-end=\"282\"><span style=\"font-weight: normal;\">MCA Computer Lab</span></strong>&nbsp;is a well-equipped, modern facility designed to support the academic and project needs of postgraduate students in the&nbsp;<strong data-start=\"402\" data-end=\"443\"><span style=\"font-weight: normal;\">Master of Computer Applications (MCA)</span></strong>&nbsp;program."
        }
      ]
    },
    {
      "id": "13-corridor-2",
      "name": "corridor 2",
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
          "yaw": -0.031332235227973015,
          "pitch": 0.3959496014478745,
          "rotation": 0,
          "target": "14-corridor-3"
        },
        {
          "yaw": 2.8680206350366113,
          "pitch": 0.42530636702083413,
          "rotation": 0,
          "target": "12-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-corridor-3",
      "name": "corridor 3",
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
          "yaw": 2.8602178402175724,
          "pitch": 0.4601056454787962,
          "rotation": 0,
          "target": "13-corridor-2"
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
