import React from 'react';

const Menu = () => {
  const signatures = [
    {
      name: 'Blaze / 熾砂',
      price: '$9,500',
      desc: '帶有濃醇玫瑰香氣，能令人感覺到活力的烈酒。',
      subDesc: '—如夜色中一瞬燃起的光芒。(剛力)'
    },
    {
      name: 'Dawn / 曦光',
      price: '$9,000',
      desc: '口感溫順好入喉，如晨露清甜甘醇的白葡萄酒。',
      subDesc: '—世界甦醒前的第一道呼吸。(意力)'
    },
    {
      name: 'Silent / 星幽',
      price: '$8,000',
      desc: '以烈酒為基底搭配特製甜酒，營造星空感的特調。',
      subDesc: '—在寂靜裡緩慢流動的宇宙。(智力)'
    },
    {
      name: 'Wisp / 迷夢',
      price: '$9,500',
      desc: '用精選葡萄釀製，窖藏多年，香氣濃烈迷人的紅葡萄酒。',
      subDesc: '—記憶邊緣的一縷殘影。(巧力)'
    }
  ];

  const bites = [
    {
      name: 'Tide / 浪花調',
      price: '$35,000',
      desc: '遠洋海產精製的三種風味，豐富的層次，鮮味十足。',
      subDesc: '（鬼魚湯 + 鹽烤鱈魚 + 帝王蟹餅）'
    },
    {
      name: 'Roam / 曠野頌',
      price: '$30,000',
      desc: '取自原野上的犎牛炭火燻製，厚實的肉感與紮實的肉質。',
      subDesc: '（烤犎牛肉 + 檸檬水 + 蘑菇烤串）'
    },
    {
      name: 'Grove / 深林謠',
      price: '$25,000',
      desc: '以山林蔬果餵養的放牧雞，柴火甕烤，肉質鮮美多汁。',
      subDesc: '（烤雞 + 果香特飲 + 奶油煎菠菜）'
    },
    {
      name: 'Gather / 豐穰曲',
      price: '$20,000',
      desc: '用當季新鮮時令食材窯烤的手工總匯披薩，每一口都是經典。',
      subDesc: '（披薩 + 開心汁 + 香蕉果昔）'
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="section-container">
        <div className="section-header text-center fade-in">
          <span className="section-tag">MENU</span>
        </div>
        <div className="menu-layout">
          {/* Column 1: Signature Cocktails */}
          <div className="menu-category fade-in">
            <h3 className="category-title">
              <i className="fa-solid fa-glass-martini-alt"></i> 特色調酒 / Signatures
            </h3>
            <ul className="menu-list">
              {signatures.map((item, index) => (
                <li key={index}>
                  <div className="menu-item-header">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                  {item.subDesc && <p className="item-desc">{item.subDesc}</p>}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Classic Spirits & Bites */}
          <div className="menu-category fade-in">
            <h3 className="category-title">
              <i className="fa-solid fa-whiskey-glass"></i> 精選私房菜 / Bites
            </h3>
            <ul className="menu-list">
              {bites.map((item, index) => (
                <li key={index}>
                  <div className="menu-item-header">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                  {item.subDesc && <p className="item-desc">{item.subDesc}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
