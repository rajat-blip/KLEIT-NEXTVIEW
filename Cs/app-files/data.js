var APP_DATA = {
  "scenes": [
    {
      "id": "0-cs-department",
      "name": "CS Department",
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
          "yaw": 0.3856605710992369,
          "pitch": 0.08644016238134,
          "rotation": 0,
          "target": "1-cs-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cs-ground-floor",
      "name": "Cs ground floor",
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
          "yaw": -0.11248348761243676,
          "pitch": 0.2675784474813945,
          "rotation": 0,
          "target": "3-cs-ground-floor-1"
        },
        {
          "yaw": 0.905768847730716,
          "pitch": 0.2397098714453758,
          "rotation": 0,
          "target": "2-cs-ground-stairs-"
        },
        {
          "yaw": 2.4459891129868323,
          "pitch": 0.1829211529740995,
          "rotation": 0,
          "target": "0-cs-department"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cs-ground-stairs-",
      "name": "Cs ground stairs ",
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
          "yaw": -0.3281246573369181,
          "pitch": 0.07914132814783059,
          "rotation": 0,
          "target": "5-cs-lobby"
        },
        {
          "yaw": -2.0753142000803777,
          "pitch": 0.41325070457894775,
          "rotation": 5.497787143782138,
          "target": "1-cs-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cs-ground-floor-1",
      "name": "Cs Ground floor 1",
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
          "yaw": 0.8277059118357748,
          "pitch": 0.19157918725672474,
          "rotation": 0,
          "target": "4-cs-main-3-end"
        },
        {
          "yaw": -2.1295836004910385,
          "pitch": 0.4637384344893949,
          "rotation": 0,
          "target": "1-cs-ground-floor"
        },
        {
          "yaw": 2.9394471571728706,
          "pitch": 0.28529143959158176,
          "rotation": 4.71238898038469,
          "target": "2-cs-ground-stairs-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6917695065219078,
          "pitch": -0.1490587165618571,
          "title": "Alan Tutoring Lab",
          "text": "Alan Tutoring Lab is a dedicated support center for enhancing understanding in key Computer Science areas"
        },
        {
          "yaw": -0.6804276371466091,
          "pitch": -0.3258661124029665,
          "title": "S. Ramanujan Lab ",
          "text": "Lab supports students with resources for coding, projects, and technical skill development."
        }
      ]
    },
    {
      "id": "4-cs-main-3-end",
      "name": "Cs main 3 end",
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
          "yaw": 3.0341194935689426,
          "pitch": 0.3772616613790376,
          "rotation": 0,
          "target": "3-cs-ground-floor-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.466433415964449,
          "pitch": -0.15740601003844645,
          "title": "Washroom Gents and Ladies",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-cs-lobby",
      "name": "Cs lobby",
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
          "yaw": 0.002345965210651002,
          "pitch": 0.3530245668296992,
          "rotation": 0,
          "target": "6-cs-lobby-1"
        },
        {
          "yaw": 2.426111141971214,
          "pitch": 0.454962205323028,
          "rotation": 0,
          "target": "2-cs-ground-stairs-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7955720425680255,
          "pitch": 0.025439459906422712,
          "title": "Drinking Water",
          "text": "The drinking water station provides clean and safe filtered water for students throughout the day. It is easily accessible and regularly maintained to ensure hygiene, offering a convenient spot for everyone to stay refreshed on campus."
        }
      ]
    },
    {
      "id": "6-cs-lobby-1",
      "name": "Cs lobby 1",
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
          "yaw": -0.13170846493716581,
          "pitch": 0.2727912705322204,
          "rotation": 0,
          "target": "7-cs-main-lobby"
        },
        {
          "yaw": 1.5986995072527712,
          "pitch": 0.35449991245027057,
          "rotation": 0,
          "target": "8-cs-passage-lobby-"
        },
        {
          "yaw": 2.6688646599505343,
          "pitch": -0.05414105372130429,
          "rotation": 0,
          "target": "20-cs-staff-room-"
        },
        {
          "yaw": 3.0983136394942568,
          "pitch": 0.41448328898297326,
          "rotation": 0,
          "target": "5-cs-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cs-main-lobby",
      "name": "Cs main lobby",
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
          "yaw": -0.49698782502568406,
          "pitch": 0.25508416412544577,
          "rotation": 5.497787143782138,
          "target": "9-cs-lobby-exit"
        },
        {
          "yaw": 0.46425825082585703,
          "pitch": 0.2202476250772758,
          "rotation": 0,
          "target": "6-cs-lobby-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.029448129898828057,
          "pitch": -0.22014660635769268,
          "title": "Cs Lobby",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-WEB:cda72358-649d-410a-8e9c-31e343a48b3f-8\" data-testid=\"conversation-turn-16\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] thread-sm:[--thread-content-margin:--spacing(6)] thread-lg:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] thread-lg:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"87636c5b-3527-49c1-969c-bdbf1e6a6a72\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"94\" data-end=\"327\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"94\" data-end=\"327\" data-is-last-node=\"\">The CS Lobby offers a comfortable seating area designed for group discussions and short study breaks. The space is bright and welcoming, with ample natural sunlight that creates a pleasant and productive environment for students.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "8-cs-passage-lobby-",
      "name": "Cs passage lobby ",
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
          "yaw": -0.046403850565130966,
          "pitch": 0.3192716660623862,
          "rotation": 0,
          "target": "9-cs-lobby-exit"
        },
        {
          "yaw": 2.9908789231058384,
          "pitch": 0.3585555102638338,
          "rotation": 4.71238898038469,
          "target": "5-cs-lobby"
        },
        {
          "yaw": -1.6594301851318765,
          "pitch": 0.14309505777464082,
          "rotation": 0,
          "target": "7-cs-main-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cs-lobby-exit",
      "name": "Cs lobby exit",
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
          "yaw": -0.5557604804515393,
          "pitch": 0.4252426185242566,
          "rotation": 4.71238898038469,
          "target": "10-cs-l-stairs-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cs-l-stairs-1st-floor",
      "name": "Cs L stairs 1st floor",
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
          "yaw": -1.3193539597413775,
          "pitch": 0.3163020043079019,
          "rotation": 0,
          "target": "8-cs-passage-lobby-"
        },
        {
          "yaw": -0.014450444649952487,
          "pitch": -0.08764306529684518,
          "rotation": 0,
          "target": "12-cs-1st-floor-1"
        },
        {
          "yaw": 0.39156129999935274,
          "pitch": 0.41907725169928156,
          "rotation": 0,
          "target": "27-cs-basement-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cs-lobby-1st-floor-",
      "name": "Cs lobby 1st floor ",
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
          "yaw": -0.46979237347074765,
          "pitch": 0.4332177139210369,
          "rotation": 7.0685834705770345,
          "target": "12-cs-1st-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cs-1st-floor-1",
      "name": "Cs 1st floor 1",
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
          "yaw": 1.380870164630963,
          "pitch": 0.3841191291548043,
          "rotation": 0,
          "target": "10-cs-l-stairs-1st-floor"
        },
        {
          "yaw": 0.1316326031044266,
          "pitch": 0.44870123546392016,
          "rotation": 0.7853981633974483,
          "target": "13-cs-1st-floor-2-"
        },
        {
          "yaw": 1.0359690187617776,
          "pitch": -0.035996632812471674,
          "rotation": 0,
          "target": "15-cs-2nd-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cs-1st-floor-2-",
      "name": "Cs 1st floor 2 ",
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
          "yaw": 0.16061609913973918,
          "pitch": 0.16707727186660293,
          "rotation": 0,
          "target": "14-cs-1st-floor-3-end-"
        },
        {
          "yaw": 2.150311305312525,
          "pitch": 0.40251604759662385,
          "rotation": 4.71238898038469,
          "target": "12-cs-1st-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-cs-1st-floor-3-end-",
      "name": "Cs 1st floor 3 end ",
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
          "yaw": -3.021591718330633,
          "pitch": 0.27088111617521626,
          "rotation": 0,
          "target": "13-cs-1st-floor-2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cs-2nd-floor-",
      "name": "Cs 2nd floor ",
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
          "yaw": 0.740385164028698,
          "pitch": -0.03659879518970399,
          "rotation": 0,
          "target": "16-cs-2nd-floor-1-"
        },
        {
          "yaw": -0.45449280756518284,
          "pitch": 0.24342426876475187,
          "rotation": 11.780972450961727,
          "target": "24-cs-s-room-level-1"
        },
        {
          "yaw": 1.061967036823976,
          "pitch": 0.4158326734632709,
          "rotation": 6.283185307179586,
          "target": "12-cs-1st-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-cs-2nd-floor-1-",
      "name": "Cs 2nd floor 1 ",
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
          "yaw": 2.034019737801211,
          "pitch": 0.5247377980789736,
          "rotation": 0,
          "target": "15-cs-2nd-floor-"
        },
        {
          "yaw": 0.1773822596138146,
          "pitch": 0.3450635767010546,
          "rotation": 1.5707963267948966,
          "target": "17-cs-2nd-floor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cs-2nd-floor-2",
      "name": "Cs 2nd floor 2",
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
          "yaw": -0.040040393846673794,
          "pitch": 0.2398824940747808,
          "rotation": 0,
          "target": "18-cs-2nd-floor-3-"
        },
        {
          "yaw": 1.2795345909184341,
          "pitch": 0.39698244393688853,
          "rotation": 5.497787143782138,
          "target": "16-cs-2nd-floor-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cs-2nd-floor-3-",
      "name": "Cs 2nd floor 3 ",
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
          "yaw": -0.2646451224679307,
          "pitch": 0.1772363099368146,
          "rotation": 0,
          "target": "19-cs-2nd-floor-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-cs-2nd-floor-end",
      "name": "Cs 2nd floor end",
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
      "id": "20-cs-staff-room-",
      "name": "Cs staff room ",
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
          "yaw": -0.9026537021512393,
          "pitch": 0.359767366789022,
          "rotation": 0.7853981633974483,
          "target": "21-cs-staff-room-1-"
        },
        {
          "yaw": 0.9639542223456097,
          "pitch": 0.35561670755264885,
          "rotation": 0,
          "target": "5-cs-lobby"
        },
        {
          "yaw": 0.5360866684451011,
          "pitch": -0.075634154560408,
          "rotation": 0,
          "target": "23-cs-staff-room-stairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-cs-staff-room-1-",
      "name": "Cs staff room 1 ",
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
          "yaw": 0.22163710648645818,
          "pitch": 0.1795110219378273,
          "rotation": 0,
          "target": "22-cs-staff-room-2"
        },
        {
          "yaw": 1.9833343264816081,
          "pitch": 0.31440695751652825,
          "rotation": 4.71238898038469,
          "target": "20-cs-staff-room-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4335608932315935,
          "pitch": -0.08385693985818676,
          "title": "Staff Room",
          "text": "&nbsp;It provides a calm and organized environment where students can approach faculty for guidance, support, or academic discussions during designated hours"
        }
      ]
    },
    {
      "id": "22-cs-staff-room-2",
      "name": "Cs staff room 2",
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
          "yaw": 2.8965542154859234,
          "pitch": 0.24302095631384368,
          "rotation": 5.497787143782138,
          "target": "21-cs-staff-room-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cs-staff-room-stairs-",
      "name": "Cs staff room stairs ",
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
          "yaw": 0.08243428527827312,
          "pitch": 0.35801547002952105,
          "rotation": 0,
          "target": "20-cs-staff-room-"
        },
        {
          "yaw": -1.6348661704757461,
          "pitch": 0.4251087147122501,
          "rotation": 0,
          "target": "24-cs-s-room-level-1"
        },
        {
          "yaw": -0.29457647266883313,
          "pitch": -0.06754775173710748,
          "rotation": 0,
          "target": "25-cs-s-room-level-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-cs-s-room-level-1",
      "name": "Cs S Room level 1",
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
          "yaw": 3.0733459164056525,
          "pitch": 0.291925071012864,
          "rotation": 4.71238898038469,
          "target": "15-cs-2nd-floor-"
        },
        {
          "yaw": -0.07961363647735453,
          "pitch": 0.26879774845673765,
          "rotation": 10.995574287564278,
          "target": "23-cs-staff-room-stairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-cs-s-room-level-2",
      "name": "Cs S Room level 2",
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
          "yaw": 2.57796565127755,
          "pitch": 0.28685214483176047,
          "rotation": 5.497787143782138,
          "target": "23-cs-staff-room-stairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-cs-s-room-level-3-end",
      "name": "Cs S Room level 3 end",
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
      "id": "27-cs-basement-1-",
      "name": "Cs basement 1 ",
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
          "yaw": 0.4864337569099515,
          "pitch": -0.05340741751911615,
          "rotation": 0,
          "target": "10-cs-l-stairs-1st-floor"
        },
        {
          "yaw": 7.80833531166536e-9,
          "pitch": 0.20617046302679753,
          "rotation": 0,
          "target": "28-cs-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-cs-basement-2",
      "name": "Cs basement 2",
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
          "yaw": -0.7868999920549893,
          "pitch": 0.1657504392021103,
          "rotation": 0,
          "target": "29-cs-basement-end-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-cs-basement-end-",
      "name": "Cs basement end ",
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
