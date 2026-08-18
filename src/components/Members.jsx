import { useState, useEffect, useCallback } from 'react';

// Import images from assets folder
import woshoeImg from '../assets/wo34.png';
import ToastImg from '../assets/toast34.png';
import GmeowImg from '../assets/Gmeow34.png';
import CmeowImg from '../assets/Cmeow34.png';
import blackrabbitImg from '../assets/blackrabbit34.png';
import emiImg from '../assets/emi34.png';
import lobsterImg from '../assets/lobster34.png';
import YYImg from '../assets/YY34.png';
import ashImg from '../assets/ash34.png';
import greenImg from '../assets/green34.png';
import satoriImg from '../assets/satori34.png';
import snowImg from '../assets/snow34.png';
import nickImg from '../assets/nick34.png';
import D7Img from '../assets/D734.png';
import purpleImg from '../assets/purple34.png';
import seedImg from '../assets/seed34.png';
import catImg from '../assets/cat34.png';





const members = [
  {
    name: 'Woshoe - 窩窩',
    image: woshoeImg,
    intro: [
      '開店是一場豪賭，人生也是。',
      '喜歡聽故事，也擅長替故事保守秘密。',
      '小小的身影穿梭於人群與燈影之間，',
      '編織旅人們安靜的夜。',
      '有時會突然不見，消失在店裡某個誰也找不到的角落。',
      '「絕對不是去鬼混，絕對不是。」'
    ],
    specialService: '特殊服務項目 : 密談、代客肖像'
  },
  {
    name: '吐司 - Toast',
    image: ToastImg,
    intro: [
      '有人太快、有人太慢，',
      '有人看了說不敢，有人笑看。',
      '她努力生活，不對任何事物停留，',
      '但她最喜歡的是和人多碰一杯酒。',
      '「別告訴店長。」',
      '她眨了眨眼，今天又喝掉了店長珍藏的波摩。'
    ],
    specialService: '特殊服務項目 : 密談、漫步、征伐'
  },
  {
    name: '焗烤喵 - 阿喵',
    image: GmeowImg,
    intro: [
      '溫柔沉穩、親切隨和，',
      '待在他身邊總是特別令人安心。',
      '提到弟弟時，顯得特別溫柔寵溺。',
      '命運相似，又截然不同，如同他們兄弟檔。',
      '「希望旅途之餘，在此駐足能讓您感到放鬆，',
      '很高興認識您。」他擦拭著空酒杯，溫柔微笑著說道。'
    ],
    specialService: '特殊服務項目 : 密談、漫步'
  },
  {
    name: '千層喵 - 阿喵',
    image: CmeowImg,
    intro: [
      '開朗陽光、親切隨和，',
      '待在他身邊總是令人特別暖心。',
      '提到哥哥時，會少見得慌張害羞。',
      '命運總是，又截然不同，如同他們兄弟檔。',
      '「很高興認識您，請您儘管在店裡休息放鬆，',
      '休息充分再出發吧。」他晃著調酒器，開朗燦笑著說道。',
    ],
    specialService: '特殊服務項目 : 密談、漫步'
  },
  // {
  //   name: '筱楓a黑兔 - 黑兔',
  //   image: blackrabbitImg,
  //   intro: [
  //     '夜色很適合紫與黑，也很適合安靜的人。',
  //     '外冷內熱，話少但細心。',
  //     '看似難以接近，其實很重視每一位願意靠近的人。',
  //     '也會記得客人的小習慣。',
  //     ' ',
  //     '「來，請說吧，聆聽您的故事是我的職責。」'
  //   ],
  //   specialService: '特殊服務項目 : 無'
  // },
  {
    name: 'Emilia - Emi',
    image: emiImg,
    intro: [
      '月色般沉寂，落櫻般翩飛，',
      '唯她緘默不語，漫意晃酒盞。',
      '一躍而過的掠影，牽動她一瞬的雀躍，',
      '是貓咪，靈巧而平靜，與她相隨。',
      '',
      '「大貓咪保佑。」她在心裡默默祈禱'
    ],
    specialService: '特殊服務項目 : 個人攝影'
  },
  {
    name: '鋼鐵龍蝦 - 龍蝦',
    image: lobsterImg,
    intro: [
      '對於客人的身份與神色，',
      '他不主動追問，也不作任何評判。',
      '他只是靜靜地站在一旁，用那雙深邃的眼眸，',
      '默默地將每一個旅人的故事收入心底。',
      '「歡迎歸來，漂泊的靈魂。',
      '今晚有什麼故事，想與我分享？」'
    ],
    specialService: '特殊服務項目 : 密談、漫步、征伐'
  },
  {
    name: '櫻空玥 - 玥玥',
    image: YYImg,
    intro: [
      '寡言害羞是她給人的第一印象，',
      '但她只是不擅言詞，其實很體貼溫暖。',
      '在熙攘的人群穿梭，優雅俐落，',
      '靦腆似細水，靈魂如焰火，',
      ' ',
      '「歡迎光臨《Bar Sola》。」她有些羞澀的招呼著。'
    ],
    specialService: '特殊服務項目 : 密談、征伐'
  },
  {
    name: '格林',
    image: greenImg,
    intro: [
      '溫柔內斂，將心事藏於筆尖。',
      '喜愛寫作與收集童話書，',
      '記錄旅途中的相遇。',
      '她害怕孤單，也藏著不願訴說的過去。',
      '「若您願意留下片刻，能否與我分享您的故事？」',
      '她輕撫書頁，溫柔微笑著說道。'
    ],
    specialService: '特殊服務項目 : 密談、漫步、征伐'
  },
  {
    name: '時達艾詡 - 艾詡',
    image: ashImg,
    intro: [
      '初見時，她給人難以親近的印象，',
      '禮儀一絲不苟，距離恰到好處。',
      '隨時間相處，會發現她的拘謹，',
      '只是對每一次相遇的真誠與尊重。',
      '她不追求成為火焰，只願如其名，',
      '在夜晚散去之後，仍能留下些許溫暖。',
    ],
    specialService: '特殊服務項目 : 密談、簽繪、漫步、征伐'
  },
  {
    name: 'Satori ',
    image: satoriImg,
    intro: [
      '她習慣以「大人」尊稱客人，',
      '敖龍族的特有氣質與禮貌，在她身上展現的淋漓盡致。',
      '但熟悉她的朋友都知道，她對拉拉菲爾族非常狂熱，',
      '也因此結識了身為拉拉菲爾族的店長，',
      '並且前來應徵成為店員。',
      '「晚上好，旅者大人，歡迎光臨《Sola》。」',
    ],
    specialService: '特殊服務項目 : 密談、征伐'
  },
  {
    name: '緋寒櫻綻 - 緋寒',
    image: snowImg,
    intro: [
      '他是高冷的幕後功臣，',
      '店內的酒水與料理，幾乎由他包辦，',
      '雖然偶爾也有風趣和搞怪的一面，',
      '但更多時候，他只是默默地靠著牆看著一切發生，',
      '不過同仁們都知道，他只是看起來冷淡，但並不冷漠。',
      '「嗯？需要餐點是嗎？知道了，我去準備。」',
    ],
    specialService: '特殊服務項目 : 密談、征伐'
  },
  {
    name: '尼克席恩 - 尼克',
    image: nickImg,
    intro: [
      '黑影精靈的膚色，是他曾經的傷痛，',
      '他藏起自己的想法，不慍不火。',
      '但歷經漫長的旅途後，他改變原先的想法，',
      '依循本心去想去的地方，做想做的事。',
      '',
      '「歡迎來到《Bar Sola》，希望您在此能放心休憩。」',
    ],
    specialService: '特殊服務項目 : 密談、簽繪、漫步、征伐'
  },
  {
    name: '薰薰薰 - 薰薰',
    image: purpleImg,
    intro: [
      '垂耳和小狗的眼神是他的特徵，',
      '他有些笨拙、逗樂客人、炒熱氣氛，',
      '同時他也細膩與真摯，如同薰衣草般讓人安心。',
      '或許是自己曾經落入泥潭，他常想拉人一把。',
      '',
      '「希望我們可以成為彼此黑暗裡的光。」他在日記寫下。',
    ],
    specialService: '特殊服務項目 : 密談、漫步、征伐、繪圖'
  },
  {
    name: '子瑄 - 瑄瑄',
    image: catImg,
    intro: [
      '她是來自海都的小貓，街頭跑跑跳跳，',
      '習慣擦肩而過，習慣人來人往。',
      '她隨著自己的心意走，想去哪就去哪，',
      '如今旅途結束了，她來到《Bar Sola》，',
      '「今天就把煩惱丟到門外吧！',
      '這裡有舒服的座位、有美酒，還有本喵陪您聊天呢！」',
    ],
    specialService: '特殊服務項目 : 漫步'
  },
  {
    name: '草草 ',
    image: seedImg,
    intro: [
      '她像小太陽一樣熱情快樂，',
      '對繪畫與交朋友洋溢著熱情。',
      '她窮，但她又富足，',
      '只要可以創作和交朋友，她就能感到無比開心。',
      '「我喜歡用畫筆與寬廣世界交談，',
      '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0讓我們一起繪製充滿故事的畫像吧！」',
    ],
    specialService: '特殊服務項目 : 密談、簽繪、漫步'
  },
  {
    name: 'Dseven - D7',
    image: D7Img,
    intro: [
      '他走過整個艾奧傑亞，見過太多離開，',
      '也習慣了很多來不及說完的故事。',
      '他認為，很多東西不是不想留，而是留不住。',
      '他覺得，不用想明天，也不用解釋，活著就好。',
      '看著每一位來到這裡的旅人，他輕聲地說，',
      '「至少在《Bar Sola》，這一個夜晚，是你的。」',
    ],
    specialService: '特殊服務項目 : 密談、漫步、征伐'
  },
];

const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in');
  const [photoTransition, setPhotoTransition] = useState('slide-next-in');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    members.forEach((member) => {
      const img = new Image();
      img.src = member.image;
      if (typeof img.decode === 'function') {
        img.decode().catch(() => undefined);
      }
    });
  }, []);

  const changeMember = useCallback((direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    let nextIndex = currentIndex;
    if (direction === 'prev') {
      nextIndex = currentIndex - 1 < 0 ? members.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex + 1 >= members.length ? 0 : currentIndex + 1;
    }

    const nextTransition = direction === 'next' ? 'slide-next-out' : 'slide-prev-out';
    setPhotoTransition(nextTransition);
    setFadeState('out');

    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setCurrentIndex(nextIndex);
      setPhotoTransition(direction === 'next' ? 'slide-next-in' : 'slide-prev-in');
      setFadeState('in');

      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
    }, 550);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      changeMember('next');
    }, 6000); // 秒數調整 6000 = 6 秒

    return () => clearInterval(timer);
  }, [changeMember]);

  const currentMember = members[displayIndex];

  return (
    <section className="members-section" id="story">
      {/* Animated Light Backdrop (behind content) */}
      <div className="members-light-bg">
        <div className="light-glow"></div>
        <div className="light-rays"></div>
        <div className="light-dapple"></div>
        <div className="light-particle p1"></div>
        <div className="light-particle p2"></div>
        <div className="light-particle p3"></div>
      </div>
      <div className="section-container">
        <div className="section-header text-center fade-in">
          <span className="section-tag">Members</span>
        </div>
        <div className="member-showcase fade-in">
          {/* Left: Photo with Nav Arrows */}
          <div className="member-photo-container">
            <button
              className="member-arrow arrow-left"
              aria-label="Previous member"
              onClick={() => changeMember('prev')}
            >
              <span className="arrow-shape-left"></span>
            </button>
            <div className={`member-photo-wrapper ${photoTransition}`}>
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="member-photo"
                decoding="async"
                loading="eager"
              />
            </div>
            <button
              className="member-arrow arrow-right"
              aria-label="Next member"
              onClick={() => changeMember('next')}
            >
              <span className="arrow-shape-right"></span>
            </button>
          </div>

          {/* Right: Info */}
          <div className={`member-info-container ${fadeState === 'in' ? 'fade-visible' : 'fade-hidden'}`}>
            <h2 className="member-name">{currentMember.name}</h2>
            <div className="member-separator"></div>
            <div className="member-intro">
              {currentMember.intro.map((text, idx) => (
                <p key={idx} className="intro-text">
                  {text === ' ' ? '\u00A0' : text}
                </p>
              ))}
              <p className="special-service">{currentMember.specialService}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
