var APP_DATA = {
  "scenes": [
    {
      "id": "0-campus-entrance",
      "name": "Campus Entrance",
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
        "yaw": -0.6937468758254148,
        "pitch": -0.20620044835739648,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": -0.0017306913941226298,
          "pitch": 0.022933181219670473,
          "rotation": 0,
          "target": "1-campus-main-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2304809669656542,
          "pitch": -0.2879237408539801,
          "title": "KLE Institute of Technology (KLEIT), Hubballi",
          "text": "<p class=\"MsoNormal\"><span style=\"font-size:12.0pt;line-height:150%;font-family:\n&quot;Times New Roman&quot;,serif\">KLEIT, Hubballi, is a premier engineering institution\noffering quality technical education with modern infrastructure, well-equipped\nlaboratories, and experienced faculty. The campus provides a supportive\nacademic environment that encourages innovation, research, and overall student\ndevelopment.<o:p></o:p></span></p>"
        }
      ]
    },
    {
      "id": "1-campus-main-",
      "name": "Campus main ",
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
          "yaw": -3.0072985650452217,
          "pitch": 0.3431014228724756,
          "rotation": 0,
          "target": "0-campus-entrance"
        },
        {
          "yaw": -0.12018263141207797,
          "pitch": 0.06716038773432054,
          "rotation": 0,
          "target": "2-campus-main-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-campus-main-1",
      "name": "Campus main 1",
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
          "yaw": -2.977126465000774,
          "pitch": 0.2730226158225033,
          "rotation": 0,
          "target": "1-campus-main-"
        },
        {
          "yaw": 0.10273538054978815,
          "pitch": 0.1597832882989607,
          "rotation": 0,
          "target": "3-campus-main-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-campus-main-2",
      "name": "Campus main 2",
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
          "yaw": -3.0446316351106777,
          "pitch": 0.2261632275173664,
          "rotation": 0,
          "target": "2-campus-main-1"
        },
        {
          "yaw": 0.09981992797027672,
          "pitch": 0.22475521087200434,
          "rotation": 0,
          "target": "4-campus-main-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-campus-main-3",
      "name": "Campus main 3",
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
          "yaw": -2.9148158244971327,
          "pitch": 0.23180238190676405,
          "rotation": 0,
          "target": "3-campus-main-2"
        },
        {
          "yaw": 0.023561102963181924,
          "pitch": 0.2863890411574701,
          "rotation": 0,
          "target": "5-campus-quadrangle"
        },
        {
          "yaw": 0.6265031361876101,
          "pitch": 0.11429196510209749,
          "rotation": 7.0685834705770345,
          "target": "6-campus-quadrangle-cs"
        },
        {
          "yaw": -0.26802063879079974,
          "pitch": 0.043887891078044916,
          "rotation": 0,
          "target": "26-quad-end-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-campus-quadrangle",
      "name": "Campus Quadrangle",
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
          "yaw": 1.155494873958549,
          "pitch": 0.24108444604405221,
          "rotation": 0,
          "target": "6-campus-quadrangle-cs"
        },
        {
          "yaw": -2.9223444593031456,
          "pitch": 0.2146788376564146,
          "rotation": 0,
          "target": "4-campus-main-3"
        },
        {
          "yaw": -0.5343381873685704,
          "pitch": 0.09520474095647558,
          "rotation": 0,
          "target": "26-quad-end-"
        },
        {
          "yaw": -1.1001767601421921,
          "pitch": 0.1918973367008121,
          "rotation": 5.497787143782138,
          "target": "27-admin-block"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2889190158076556,
          "pitch": -0.1932126852066851,
          "title": "Administration",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-6931c3a4-13dc-8321-a673-a84b7a11d8b8-0\" data-testid=\"conversation-turn-94\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"7b7054c3-550c-45ea-808a-b58ee4dd5d77\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"71\" data-end=\"278\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"71\" data-end=\"278\" data-is-last-node=\"\">The Administration Office at KLEIT oversees campus operations, admissions, and student services, providing efficient support and ensuring smooth functioning of all academic and administrative activities.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "6-campus-quadrangle-cs",
      "name": "Campus Quadrangle Cs",
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
          "yaw": -0.14334765394996474,
          "pitch": -0.03497113699694587,
          "rotation": 0,
          "target": "7-campus-cs-"
        },
        {
          "yaw": -2.923930370984266,
          "pitch": 0.318218774096259,
          "rotation": 0,
          "target": "5-campus-quadrangle"
        },
        {
          "yaw": -2.4797218463538684,
          "pitch": 0.13319586495594748,
          "rotation": 0.7853981633974483,
          "target": "26-quad-end-"
        },
        {
          "yaw": 2.0425759990446117,
          "pitch": 0.17243117701999466,
          "rotation": 0,
          "target": "4-campus-main-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-campus-cs-",
      "name": "Campus Cs ",
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
          "yaw": -0.11074729670121997,
          "pitch": 0.35309555743140386,
          "rotation": 0,
          "target": "8-campus-cs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-campus-cs-1",
      "name": "Campus Cs 1",
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
          "yaw": -2.975927748816197,
          "pitch": 0.3170555931309522,
          "rotation": 0.7853981633974483,
          "target": "7-campus-cs-"
        },
        {
          "yaw": -0.16201324851568266,
          "pitch": 0.06836505159595418,
          "rotation": 0,
          "target": "9-campus-cs-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-campus-cs-2",
      "name": "Campus Cs 2",
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
          "yaw": 3.121496161135653,
          "pitch": 0.4278377195264227,
          "rotation": 0,
          "target": "8-campus-cs-1"
        },
        {
          "yaw": 0.2863303514425546,
          "pitch": 0.15871684838918476,
          "rotation": 0,
          "target": "10-campus-cs-end"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5986384185685623,
          "pitch": -0.2342410809432014,
          "title": "Computer Science",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-6931c3a4-13dc-8321-a673-a84b7a11d8b8-1\" data-testid=\"conversation-turn-96\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"6f150715-1f9d-42e5-a37d-2b0d0ad0473e\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"74\" data-end=\"317\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"74\" data-end=\"317\" data-is-last-node=\"\">The Computer Science Department at KLEIT offers strong technical training in programming, software development, AI, and emerging technologies, supported by modern labs and experienced faculty to prepare students for industry-ready careers.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "10-campus-cs-end",
      "name": "Campus Cs End",
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
          "yaw": 0.21198698126520732,
          "pitch": -0.03278725303249708,
          "rotation": 0,
          "target": "11-cs-to-ec-"
        },
        {
          "yaw": 3.0323090167738282,
          "pitch": 0.16078660178413706,
          "rotation": 0,
          "target": "9-campus-cs-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cs-to-ec-",
      "name": "CS to EC ",
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
          "yaw": 3.0901249282799217,
          "pitch": 0.40355490373979563,
          "rotation": 0,
          "target": "10-campus-cs-end"
        },
        {
          "yaw": 0.0029456655978314927,
          "pitch": -0.014727194837306001,
          "rotation": 0,
          "target": "12-cs-to-ec-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cs-to-ec-1",
      "name": "CS to EC 1",
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
          "yaw": -2.8229622841242534,
          "pitch": 0.4527298126681618,
          "rotation": 0,
          "target": "11-cs-to-ec-"
        },
        {
          "yaw": 0.009136275504328495,
          "pitch": 0.18616496743043065,
          "rotation": 0,
          "target": "13-cs-to-ec-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cs-to-ec-2",
      "name": "CS to EC 2",
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
          "yaw": 0.18442301816641837,
          "pitch": 0.22648554377910735,
          "rotation": 0,
          "target": "14-ec-main-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ec-main-",
      "name": "EC main ",
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
          "yaw": -0.09398358369557513,
          "pitch": 0.17417670070510916,
          "rotation": 0,
          "target": "15-ec-main-1"
        },
        {
          "yaw": 3.116859377986012,
          "pitch": 0.19611393676007083,
          "rotation": 0,
          "target": "13-cs-to-ec-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ec-main-1",
      "name": "EC main 1",
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
          "yaw": 3.0431395025321173,
          "pitch": 0.21074282066470928,
          "rotation": 0,
          "target": "14-ec-main-"
        },
        {
          "yaw": -0.08814119522081576,
          "pitch": 0.17995393380370395,
          "rotation": 4.71238898038469,
          "target": "16-ec-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ec-end",
      "name": "EC end",
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
          "yaw": -1.574680303296482,
          "pitch": -0.05280493444592693,
          "rotation": 0,
          "target": "17-ec-to-center"
        },
        {
          "yaw": 3.1069591819205797,
          "pitch": 0.3033546905866107,
          "rotation": 0,
          "target": "15-ec-main-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ec-to-center",
      "name": "EC to center",
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
          "yaw": -2.9384901272012343,
          "pitch": 0.4319843390360454,
          "rotation": 13.351768777756625,
          "target": "16-ec-end"
        },
        {
          "yaw": -0.6353373158504905,
          "pitch": 0.26348718833927975,
          "rotation": 0,
          "target": "18-ec-to-center-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ec-to-center-1",
      "name": "EC to center 1",
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
          "yaw": 1.9412227274164424,
          "pitch": 0.005607574466440113,
          "rotation": 0,
          "target": "17-ec-to-center"
        },
        {
          "yaw": -0.2618990706490987,
          "pitch": 0.16077744976137964,
          "rotation": 0,
          "target": "19-ec-to-center-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ec-to-center-2",
      "name": "EC to center 2",
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
          "yaw": 0.03981690430259377,
          "pitch": 0.39538211771207443,
          "rotation": 4.71238898038469,
          "target": "20-ec-to-center-end"
        },
        {
          "yaw": 3.1014015358644276,
          "pitch": 0.16512174055478468,
          "rotation": 0,
          "target": "18-ec-to-center-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ec-to-center-end",
      "name": "EC to center end",
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
          "yaw": -0.03878382382625212,
          "pitch": 0.25732137652377496,
          "rotation": 0,
          "target": "21-center-to-main"
        },
        {
          "yaw": -1.6689390663475727,
          "pitch": 0.05486334924004055,
          "rotation": 0,
          "target": "19-ec-to-center-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-center-to-main",
      "name": "Center to main",
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
          "yaw": -3.1394800352937686,
          "pitch": 0.12707817195913762,
          "rotation": 0,
          "target": "20-ec-to-center-end"
        },
        {
          "yaw": 0.02199351876801714,
          "pitch": 0.3085517664167785,
          "rotation": 0,
          "target": "22-center-to-main-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-center-to-main-1",
      "name": "Center to main 1",
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
          "yaw": 2.9309920107925613,
          "pitch": 0.2017863576071548,
          "rotation": 0,
          "target": "21-center-to-main"
        },
        {
          "yaw": -0.16061628790028415,
          "pitch": 0.3305274563293441,
          "rotation": 0,
          "target": "23-center-to-main-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-center-to-main-2",
      "name": "Center to main 2",
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
          "yaw": -2.925561620855035,
          "pitch": 0.05760373651727946,
          "rotation": 0,
          "target": "22-center-to-main-1"
        },
        {
          "yaw": 0.20799599026371496,
          "pitch": 0.3559656019018238,
          "rotation": 0,
          "target": "24-center-to-main-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-center-to-main-3",
      "name": "Center to main 3",
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
          "yaw": -2.899857400675927,
          "pitch": 0.016541071588171974,
          "rotation": 0,
          "target": "23-center-to-main-2"
        },
        {
          "yaw": 0.04155418916735343,
          "pitch": 0.30603090477609385,
          "rotation": 0,
          "target": "25-center-to-main-4-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-center-to-main-4-",
      "name": "Center to main 4 ",
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
          "yaw": -3.0430306204046484,
          "pitch": 0.11632520622367792,
          "rotation": 0,
          "target": "24-center-to-main-3"
        },
        {
          "yaw": -0.02356097265038848,
          "pitch": 0.36561732303676386,
          "rotation": 0,
          "target": "26-quad-end-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-quad-end-",
      "name": "Quad end ",
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
          "yaw": -3.0072070325667273,
          "pitch": 0.02610227451668301,
          "rotation": 0,
          "target": "25-center-to-main-4-"
        },
        {
          "yaw": 0.6234981409430009,
          "pitch": 0.1316133833276094,
          "rotation": 1.5707963267948966,
          "target": "27-admin-block"
        },
        {
          "yaw": -0.46456366068173693,
          "pitch": 0.32622600068264873,
          "rotation": 0,
          "target": "5-campus-quadrangle"
        },
        {
          "yaw": -1.0756608587804806,
          "pitch": 0.1352479786733003,
          "rotation": 0,
          "target": "6-campus-quadrangle-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-admin-block",
      "name": "Admin block",
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
          "yaw": -1.5268574284146688,
          "pitch": 0.28149711065352534,
          "rotation": 0,
          "target": "5-campus-quadrangle"
        },
        {
          "yaw": -2.720351946082104,
          "pitch": 0.08112329297133236,
          "rotation": 0,
          "target": "26-quad-end-"
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
