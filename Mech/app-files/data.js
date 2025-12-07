var APP_DATA = {
  "scenes": [
    {
      "id": "0-mechanical-department",
      "name": "Mechanical Department",
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
        "yaw": 0.7171750910527948,
        "pitch": -0.24257644146354096,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.7227633740296113,
          "pitch": 0.0835556066907035,
          "rotation": 0,
          "target": "1-mechanical-main"
        },
        {
          "yaw": 1.637360110423498,
          "pitch": 0.06056972710645603,
          "rotation": 11.780972450961727,
          "target": "14-mechanical-machine-shop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.38106668975040314,
          "pitch": -0.27034067317201504,
          "title": "Mechanical Department",
          "text": "The Mechanical Engineering Department at KLEIT provides strong technical training through well-equipped labs and experienced faculty, helping students build skills in design, manufacturing, and thermal engineering for real-world industry applications."
        }
      ]
    },
    {
      "id": "1-mechanical-main",
      "name": "Mechanical main",
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
          "yaw": -0.38982570908084035,
          "pitch": 0.25311217521047347,
          "rotation": 0,
          "target": "2-mechanical-main-1"
        },
        {
          "yaw": -2.655679464620505,
          "pitch": 0.3232770108951204,
          "rotation": 0,
          "target": "0-mechanical-department"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mechanical-main-1",
      "name": "Mechanical main 1",
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
          "yaw": -0.2891733726458732,
          "pitch": 0.3492802744513952,
          "rotation": 0,
          "target": "3-mechanical-main-2"
        },
        {
          "yaw": 2.790572491761308,
          "pitch": 0.20813533544057528,
          "rotation": 0,
          "target": "1-mechanical-main"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12719050366588291,
          "pitch": -0.24307017825538146,
          "title": "<strong data-start=\"46\" data-end=\"62\">Lecture Hall 01</strong>",
          "text": "The Lecture Hall offers a spacious and well-organized environment for teaching, equipped with comfortable seating and audio-visual facilities to support effective learning and classroom interaction."
        }
      ]
    },
    {
      "id": "3-mechanical-main-2",
      "name": "Mechanical main 2",
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
          "yaw": 0.5467612634930727,
          "pitch": 0.2984439802241976,
          "rotation": 0,
          "target": "15-mechanical-outside-stairs"
        },
        {
          "yaw": 0.2264314155615743,
          "pitch": -0.025836609881825012,
          "rotation": 0,
          "target": "4-mechanical-stairs-1st-floor"
        },
        {
          "yaw": 1.9428045070385194,
          "pitch": 0.2220793608753926,
          "rotation": 0,
          "target": "2-mechanical-main-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7360264805666876,
          "pitch": -0.2294505151261017,
          "title": "<strong data-start=\"46\" data-end=\"62\">Lecture Hall 02</strong>",
          "text": "The Lecture Hall offers a spacious and well-organized environment for teaching, equipped with comfortable seating and audio-visual facilities to support effective learning and classroom interaction."
        }
      ]
    },
    {
      "id": "4-mechanical-stairs-1st-floor",
      "name": "Mechanical stairs 1st floor",
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
          "yaw": -0.34499924751652067,
          "pitch": -0.05262108314282443,
          "rotation": 0,
          "target": "5-mechanical-1st-floor"
        },
        {
          "yaw": 0.18064127745078196,
          "pitch": 0.4988213809682751,
          "rotation": 0,
          "target": "3-mechanical-main-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mechanical-1st-floor",
      "name": "Mechanical 1st floor",
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
          "yaw": -2.8756779601393294,
          "pitch": 0.5027716504332798,
          "rotation": 0,
          "target": "4-mechanical-stairs-1st-floor"
        },
        {
          "yaw": 0.90119637741277,
          "pitch": 0.3151887740657138,
          "rotation": 7.853981633974483,
          "target": "7--mech-1st-floor-lab"
        },
        {
          "yaw": -0.7611811230638548,
          "pitch": 0.3795680049479291,
          "rotation": 4.71238898038469,
          "target": "9-mech-1st-floor-staffroom"
        },
        {
          "yaw": 0.13448391098241075,
          "pitch": 0.5036895979279805,
          "rotation": 0,
          "target": "6-mechanical-1st-floor-1"
        },
        {
          "yaw": 2.9927304106262405,
          "pitch": 0.006048736084562023,
          "rotation": 0,
          "target": "10-mech-2nd-floor-stairs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mechanical-1st-floor-1",
      "name": "Mechanical 1st floor 1",
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
          "yaw": 3.120418324688436,
          "pitch": 0.4566542648403331,
          "rotation": 0,
          "target": "9-mech-1st-floor-staffroom"
        },
        {
          "yaw": -0.2736721146937846,
          "pitch": 0.3365844600176082,
          "rotation": 6.283185307179586,
          "target": "7--mech-1st-floor-lab"
        },
        {
          "yaw": 1.407061743278394,
          "pitch": 0.41635242986645693,
          "rotation": 0,
          "target": "5-mechanical-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7--mech-1st-floor-lab",
      "name": " Mech 1st floor lab",
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
          "yaw": 2.6651888698725834,
          "pitch": 0.4250954244456473,
          "rotation": 0,
          "target": "5-mechanical-1st-floor"
        },
        {
          "yaw": -0.37849207889079395,
          "pitch": 0.26717367538862646,
          "rotation": 0,
          "target": "8-mech-1st-floor-lab-2"
        },
        {
          "yaw": 1.9226458407117155,
          "pitch": 0.3019841920844186,
          "rotation": 5.497787143782138,
          "target": "5-mechanical-1st-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6289305974295729,
          "pitch": -0.4838799573278294,
          "title": "CAMD / CAMA / CIM &amp; Automation Lab",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-6931c3a4-13dc-8321-a673-a84b7a11d8b8-3\" data-testid=\"conversation-turn-62\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"deff9164-37df-450d-b335-400f691a89cd\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"100\" data-end=\"338\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"100\" data-end=\"338\" data-is-last-node=\"\">The CAMD, CAMA, and CIM &amp; Automation Lab provides students with practical exposure to computer-aided design, manufacturing, and automated systems, helping them understand modern production technologies and industry-oriented workflows.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "8-mech-1st-floor-lab-2",
      "name": "Mech 1st floor lab 2",
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
          "yaw": 2.541958577046996,
          "pitch": 0.18918896838484578,
          "rotation": 6.283185307179586,
          "target": "7--mech-1st-floor-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07304602411042715,
          "pitch": -0.3361691621625802,
          "title": "<strong data-start=\"46\" data-end=\"65\">Research Center</strong>",
          "text": "The Research Center provides a dedicated space for advanced study and innovation, offering resources and guidance for students and faculty to work on research projects, publications, and emerging technologies."
        }
      ]
    },
    {
      "id": "9-mech-1st-floor-staffroom",
      "name": "Mech 1st floor staffroom",
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
          "yaw": -2.5848806483626987,
          "pitch": 0.24517686678943384,
          "rotation": 0,
          "target": "6-mechanical-1st-floor-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3714694354024317,
          "pitch": -0.32748240083428115,
          "title": "<strong data-start=\"46\" data-end=\"60\">Staff Room</strong>",
          "text": "<article class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" tabindex=\"-1\" dir=\"auto\" data-turn-id=\"request-6931c3a4-13dc-8321-a673-a84b7a11d8b8-8\" data-testid=\"conversation-turn-72\" data-scroll-anchor=\"true\" data-turn=\"assistant\"><div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @w-sm/main:[--thread-content-margin:--spacing(6)] @w-lg/main:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)\"><div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\" tabindex=\"-1\"><div class=\"flex max-w-full flex-col grow\"><div data-message-author-role=\"assistant\" data-message-id=\"9f408dc6-4a61-4459-b09c-afbb2460db63\" dir=\"auto\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-1\"><div class=\"flex w-full flex-col gap-1 empty:hidden first:pt-[1px]\"><div class=\"markdown prose dark:prose-invert w-full break-words dark markdown-new-styling\"><p data-start=\"63\" data-end=\"246\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"63\" data-end=\"246\" data-is-last-node=\"\">The Staff Room provides a comfortable and organized space for faculty to work, discuss, and prepare academic activities, offering a calm environment for meetings and short breaks.</strong></p></div></div></div></div><div class=\"z-0 flex min-h-[46px] justify-start\"></div><div class=\"mt-3 w-full empty:hidden\"><div class=\"text-center\"></div></div></div></div></article><div aria-hidden=\"true\" data-edge=\"true\" class=\"pointer-events-none h-px w-px\"></div>"
        }
      ]
    },
    {
      "id": "10-mech-2nd-floor-stairs-1",
      "name": "Mech 2nd floor stairs 1",
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
          "yaw": 0.06581149405157838,
          "pitch": 0.49123976819241477,
          "rotation": 0,
          "target": "5-mechanical-1st-floor"
        },
        {
          "yaw": -0.41358871238171346,
          "pitch": -0.13670421955412237,
          "rotation": 0,
          "target": "11-mech-2nd-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-mech-2nd-floor-",
      "name": "Mech 2nd floor ",
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
          "yaw": -2.8646118915504353,
          "pitch": 0.5008578007509961,
          "rotation": 0,
          "target": "10-mech-2nd-floor-stairs-1"
        },
        {
          "yaw": -0.6824797322443192,
          "pitch": 0.37390618495990324,
          "rotation": 5.497787143782138,
          "target": "12-mech-2nd-floor-lab"
        },
        {
          "yaw": 0.9489937382913496,
          "pitch": 0.3186289771890447,
          "rotation": 19.63495408493622,
          "target": "13-mech-2nd-floor-lab-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-mech-2nd-floor-lab",
      "name": "Mech 2nd floor lab",
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
          "yaw": -1.7944567029151912,
          "pitch": 0.3309666374750613,
          "rotation": 0.7853981633974483,
          "target": "11-mech-2nd-floor-"
        },
        {
          "yaw": -2.647060114901347,
          "pitch": 0.23852361884255302,
          "rotation": 6.283185307179586,
          "target": "13-mech-2nd-floor-lab-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.748491888587921,
          "pitch": -0.4683724953149593,
          "title": "<strong data-start=\"46\" data-end=\"88\">Mechanical Measurement &amp; Metrology Lab</strong>",
          "text": "The Mechanical Measurement &amp; Metrology Lab provides hands-on training in precision measurement, allowing students to use instruments like micrometers, gauges, and comparators to understand accuracy, calibration, and quality control in mechanical components"
        }
      ]
    },
    {
      "id": "13-mech-2nd-floor-lab-2",
      "name": "Mech 2nd floor lab 2",
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
          "yaw": 1.5537742104467496,
          "pitch": 0.3137540062238564,
          "rotation": 5.497787143782138,
          "target": "11-mech-2nd-floor-"
        },
        {
          "yaw": 2.372564566627542,
          "pitch": 0.2011790336662429,
          "rotation": 0,
          "target": "12-mech-2nd-floor-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9292385991360206,
          "pitch": -0.44866096718037873,
          "title": "Computer Aided Engineering Drawing",
          "text": "The Computer Aided Engineering Drawing Lab helps mechanical students learn drafting and 3D modeling using modern CAD software, enabling them to create accurate engineering drawings and understand design fundamentals effectively."
        }
      ]
    },
    {
      "id": "14-mechanical-machine-shop",
      "name": "Mechanical Machine Shop",
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
          "yaw": -0.4524928246574831,
          "pitch": 0.2010083809206975,
          "rotation": 0,
          "target": "15-mechanical-outside-stairs"
        },
        {
          "yaw": -2.2726508840340127,
          "pitch": 0.09342978333613772,
          "rotation": 0,
          "target": "0-mechanical-department"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.01176021884316647,
          "pitch": -0.07545610223777288,
          "title": "Machine Workshop",
          "text": "The Machine Workshop at KLEIT provides hands-on training in machining, fitting, welding, and manufacturing processes, equipped with essential tools and machines that help students develop practical mechanical engineering skills"
        }
      ]
    },
    {
      "id": "15-mechanical-outside-stairs",
      "name": "Mechanical outside stairs",
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
          "yaw": -0.2561240566421059,
          "pitch": -0.10248373279629419,
          "rotation": 0,
          "target": "3-mechanical-main-2"
        },
        {
          "yaw": 2.8858257696555274,
          "pitch": 0.4445713328449301,
          "rotation": 0,
          "target": "14-mechanical-machine-shop"
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
