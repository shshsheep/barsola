import React, { useState } from 'react';

// Import images from assets folder
import woshoeImg from '../assets/woshoe34.png';
import ToastImg from '../assets/Toast34.png';
import GmeowImg from '../assets/Gmeow34.png'; 
import CmeowImg from '../assets/Cmeow34.png'; 
import blackrabbitImg from '../assets/blackrabbit34.png'; 
import emiImg from '../assets/emi34.png';

const members = [
  {
    name: 'Woshoe - 窩窩',
    image: woshoeImg,
    intro: [
      '人生是一場豪賭，開店也是。',
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
      '有人太快、有人太慢，有人看了說不敢，有人笑看。',
      '她聽著客人說，帶著淺淺一抹微笑，不多言。',
      '你可以和她聊感情，和她聊裝修，但她最喜歡的是和人多碰一杯酒。',
      '她努力生活、努力往前，不對 any 任何事物停留。',
      '「別告訴店長。」她眨了眨眼，今天又喝掉了店長珍藏的波摩。'
    ],
    specialService: '特殊服務項目 : 密談、裝潢諮商'
  },
  {
    name: '焗烤喵 - 阿喵',
    image: GmeowImg,
    intro: [
      '溫柔沉穩的拉拉菲爾族，親切隨和。',
      '待在他身邊總是特別令人安心',
      '提到弟弟時，顯得特別溫柔寵溺。',
      '命運總是相似，卻又截然不同，如同他們兄弟檔。',
      '「希望旅途之餘，在此駐足能讓您感到放鬆，很高興認識您。」–他擦拭著空酒杯，溫柔微笑著說道。'
    ],
    specialService: '特殊服務項目 : 密談'
  },
  {
    name: '千層喵 - 阿喵',
    image: CmeowImg,
    intro: [
      '開朗陽光的拉拉菲爾族，親切隨和。',
      '待在他身邊總是令人特別暖心',
      '提到哥哥時，會少見得慌張害羞。',
      '命運總是相似，卻又截然不同，如同他們兄弟檔。',
      '「很高興認識您，請您儘管在店裡休息放鬆，休息充分再出發吧。」–他搖晃著調酒器，開朗燦笑著說道。'
    ],
    specialService: '特殊服務項目 : 密談'
  },
  {
    name: '筱楓a黑兔 - 黑兔',
    image: blackrabbitImg,
    intro: [
      '夜色很適合紫與黑，也很適合安靜的人。',
      '外冷內熱，話少但細心。',
      '看似難以接近，其實很重視每一位願意靠近的人。',
      '也會記得客人的小習慣。',
      ' ',
      '「來，請說吧。聆聽您的故事是我的職責。」'
    ],
    specialService: '特殊服務項目 : 無'
  },
  {
    name: 'Emilia - Emi',
    image: emiImg,
    intro: [
      '月色般沉寂，落櫻般翩飛。',
      '唯她緘默不語，漫意晃酒盞。',
      '一躍而過的掠影，牽動她一瞬的雀躍。',
      '是貓咪，靈巧而平靜，與她相隨。',
      ' ',
      '「大貓咪保佑。」— 她在心裡默默祈禱'
    ],
    specialService: '特殊服務項目 : 個人攝影'
  }
];

const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [photoClass, setPhotoClass] = useState('');
  const [textClass, setTextClass] = useState('text-fade-enter');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeMember = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    let nextIndex = currentIndex;
    if (direction === 'prev') {
      nextIndex = currentIndex - 1 < 0 ? members.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex + 1 >= members.length ? 0 : currentIndex + 1;
    }

    // Set exit animation classes
    const exitClass = direction === 'prev' ? 'exit-right' : 'exit-left';
    setPhotoClass(exitClass);
    setTextClass('');

    // Wait for the exit animation (300ms) before updating the contents and triggering entry animations
    setTimeout(() => {
      setDisplayIndex(nextIndex);
      const enterClass = direction === 'prev' ? 'enter-left' : 'enter-right';
      setPhotoClass(enterClass);
      setTextClass('text-fade-enter');
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const currentMember = members[displayIndex];

  return (
    <section className="members-section" id="story">
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
            <div className={`member-photo-wrapper ${photoClass}`}>
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="member-photo"
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
          <div className={`member-info-container ${textClass}`}>
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
