import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Database, 
  TrendingUp, 
  Terminal, 
  Cpu, 
  Briefcase, 
  Award, 
  Download, 
  BarChart3, 
  Map, 
  CheckCircle2,
  BrainCircuit,
  Globe,
  Lock,
  X
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sans selection:bg-[#2997ff] selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#1d1d1f]/80 backdrop-blur-md border-[#424245]' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 text-xs font-medium tracking-wide">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="w-5 h-5 text-[#f5f5f7]" />
              <span className="hidden sm:block text-[#f5f5f7]">AI Career Insights</span>
            </div>
            <div className="hidden md:flex space-x-8 text-[#86868b]">
              <a href="#overview" className="hover:text-[#f5f5f7] transition-colors">市場全貌</a>
              <a href="#salary" className="hover:text-[#f5f5f7] transition-colors">薪資地圖</a>
              <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">技能雷達</a>
              <a href="#roadmap" className="hover:text-[#f5f5f7] transition-colors">職涯路線</a>
            </div>
            <div>
              <button onClick={() => setShowModal(true)} className="bg-[#f5f5f7] text-black px-4 py-1.5 rounded-full hover:scale-105 transition-transform font-semibold text-xs">
                獲取完整報告
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2997ff]/10 to-transparent opacity-50 blur-3xl -z-10 rounded-full w-[800px] h-[800px] mx-auto top-[-200px]" />
        
        <div className="inline-flex items-center space-x-2 bg-[#1d1d1f] border border-[#424245] px-3 py-1 rounded-full text-[#86868b] text-xs font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#34c759]"></span>
          <span>v3.0 數據更新：覆蓋 2026/01/01 ~ 03/02</span>
        </div>
        
        <h2 className="text-[#86868b] font-semibold tracking-widest text-xs sm:text-sm uppercase mb-4">
          2026 Q1 台灣 AI 就業市場數據包
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl leading-tight">
          解碼 AI 職涯。<br />
          <span className="bg-gradient-to-r from-[#f5f5f7] via-[#86868b] to-[#424245] bg-clip-text text-transparent">
            看見你的真實身價。
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mb-12 font-medium leading-relaxed">
          1,538 筆真實職缺深度解析。10+ 產業、4 大職能、22 項核心技能。<br className="hidden md:block"/>
          從技術底層到高階管理，為台灣 AI 人才打造的終極職涯決策指南。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button onClick={() => setShowModal(true)} className="bg-[#f5f5f7] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:scale-105 transition-all flex items-center justify-center space-x-2">
            <span>立即下載 Notion 模板</span>
            <Download className="w-5 h-5" />
          </button>
          <a href="#preview" className="bg-[#1d1d1f] text-[#f5f5f7] border border-[#424245] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#424245] transition-all flex items-center justify-center space-x-2">
            <span>預覽核心數據</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section id="preview" className="py-16 md:py-24 bg-[#000000] border-t border-[#1d1d1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">數據說話。一目了然。</h2>
            <p className="text-[#86868b] text-xl">超過 1,500 筆職缺的真實輪廓，揭示市場最真實的供需樣貌。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[250px]">
            {/* Stat Card 1 */}
            <div className="bg-[#1d1d1f] rounded-3xl p-6 md:p-8 border border-[#424245] flex flex-col justify-between hover:border-[#86868b] transition-colors md:col-span-2 overflow-hidden relative group">
              <div className="z-10">
                <p className="text-[#86868b] text-sm font-semibold uppercase tracking-wider mb-2">職能分佈與中位數薪資</p>
                <h3 className="text-4xl font-bold tracking-tight mb-2">產品經理薪資<br/><span className="text-[#2997ff]">逆勢領先技術職</span></h3>
                <p className="text-[#86868b]">PM 月薪中位數達 $52,500，高於技術職的 $46,000。具備 AI 落地能力的橋樑人才正成為市場新貴。</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity translate-x-1/4 translate-y-1/4">
                <BarChart3 className="w-64 h-64" />
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#1d1d1f] rounded-3xl p-6 md:p-8 border border-[#424245] flex flex-col justify-between hover:border-[#86868b] transition-colors relative overflow-hidden">
              <div>
                <p className="text-[#86868b] text-sm font-semibold uppercase tracking-wider mb-2">最高薪產業</p>
                <h3 className="text-4xl font-bold tracking-tight text-[#f5f5f7] mb-2">$58.7k</h3>
                <p className="text-[#86868b]">數位內容產業</p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#86868b]">銀行/金融</span>
                  <span className="font-semibold">$56.1k</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#86868b]">電腦軟體</span>
                  <span className="font-semibold">$52.5k</span>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#1d1d1f] rounded-3xl p-6 md:p-8 border border-[#424245] flex flex-col justify-between hover:border-[#86868b] transition-colors">
              <div>
                <p className="text-[#86868b] text-sm font-semibold uppercase tracking-wider mb-2">整體職位機會</p>
                <h3 className="text-5xl font-bold tracking-tight mb-2">1,538<span className="text-2xl text-[#86868b] font-medium ml-2">筆</span></h3>
                <p className="text-[#86868b]">活躍 AI 相關職缺</p>
              </div>
              <div className="flex items-center space-x-2 text-[#34c759] text-sm font-medium mt-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>41.5% 職缺標示「經驗不拘」</span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#1d1d1f] rounded-3xl p-6 md:p-8 border border-[#424245] flex flex-col justify-between hover:border-[#86868b] transition-colors md:col-span-2 relative overflow-hidden group">
              <div className="z-10">
                <p className="text-[#86868b] text-sm font-semibold uppercase tracking-wider mb-2">隱藏福利解析 (v3 更新)</p>
                <h3 className="text-3xl font-bold tracking-tight mb-4">不同職能的「隱藏紅利」大不同</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-[#f5f5f7] font-semibold mb-1">技術職</div>
                    <div className="text-xs text-[#86868b]">僅 2.7% 遠端，極需 On-site</div>
                  </div>
                  <div>
                    <div className="text-[#2997ff] font-semibold mb-1">業務/顧問</div>
                    <div className="text-xs text-[#86868b]">50.9% 提供進修補助，高獎金</div>
                  </div>
                  <div>
                    <div className="text-[#bf5af2] font-semibold mb-1">PM/專案</div>
                    <div className="text-xs text-[#86868b]">27.5% 進修補助，資源匯聚點</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Radar Section */}
      <section id="skills" className="py-16 md:py-24 bg-[#1d1d1f] border-t border-[#424245]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6">核心技能雷達。</h2>
              <p className="text-[#86868b] text-xl mb-8 leading-relaxed">
                透過 NLP 技術深度解析 1,278 筆完整 JD。<br />
                揭露超越 Python 的「隱藏王者」技能，<br />以及 2026 企業最渴望的落地方案。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2997ff]/20 p-3 rounded-xl"><Terminal className="w-6 h-6 text-[#2997ff]" /></div>
                  <div>
                    <h4 className="text-[#f5f5f7] font-semibold text-lg">入門三件套 (必備)</h4>
                    <p className="text-[#86868b]">Python + SQL + Git。覆蓋 90% 以上的基本門檻。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#bf5af2]/20 p-3 rounded-xl"><CloudIcon className="w-6 h-6 text-[#bf5af2]" /></div>
                  <div>
                    <h4 className="text-[#f5f5f7] font-semibold text-lg">趨勢紅利 (2026 爆發)</h4>
                    <p className="text-[#86868b]">API 串接 + RAG + Prompt Engineering。企業落地最缺戰力。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff9f0a]/20 p-3 rounded-xl"><Cpu className="w-6 h-6 text-[#ff9f0a]" /></div>
                  <div>
                    <h4 className="text-[#f5f5f7] font-semibold text-lg">差異化殺手鐧</h4>
                    <p className="text-[#86868b]">MLOps / K8s + 垂直領域知識 (金融/半導體)。薪資直接跳級。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-[#000000] rounded-3xl p-6 md:p-8 border border-[#424245]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-6">Top Tech Stack Demand</h4>
                <div className="space-y-5">
                  <SkillBar name="Python" count="348" percentage={100} color="bg-[#f5f5f7]" tag="絕對基底" />
                  <SkillBar name="API 串接/開發" count="332" percentage={95} color="bg-[#2997ff]" tag="隱藏王者" />
                  <SkillBar name="SQL" count="165" percentage={47} color="bg-[#34c759]" />
                  <SkillBar name="Docker/K8s" count="131" percentage={37} color="bg-[#86868b]" />
                  <SkillBar name="RAG (檢索增強生成)" count="116" percentage={33} color="bg-[#ff9f0a]" tag="企業最愛" />
                  <SkillBar name="AWS/Azure/GCP" count="315" percentage={90} color="bg-[#86868b]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section id="roadmap" className="py-16 md:py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">5 大 AI 職涯路線圖。</h2>
          <p className="text-[#86868b] text-xl">找到你的精確定位，制定最有效的轉職與升級策略。</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RoadmapCard 
              title="ML/DL 工程師"
              path="模型訓練 → 優化 → 部署"
              skills="Python, PyTorch, Docker"
              app="推薦系統、風控模型、廣告投放"
            />
            <RoadmapCard 
              title="LLM/GenAI 工程師"
              path="RAG → Agent → 多模態"
              skills="LangChain, RAG, Cloud"
              app="企業知識庫、智能客服、內容生成"
              highlight={true}
            />
            <RoadmapCard 
              title="資料科學家"
              path="數據分析 → 建模 → 決策支援"
              skills="SQL, 統計, Tableau"
              app="商業分析、A/B Test、客戶分群"
            />
            <RoadmapCard 
              title="MLOps 工程師"
              path="模型上線 → 監控 → CI/CD"
              skills="Docker, K8s, Git"
              app="ML Pipeline、效能監控"
            />
            <RoadmapCard 
              title="AI 應用工程師"
              path="全端整合 → API → 產品化"
              skills="FastAPI, React, API"
              app="將模型變產品，中小企業最缺"
            />
            
            <div className="bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] rounded-3xl p-6 md:p-8 border border-[#424245] flex flex-col justify-center items-center text-center">
              <Map className="w-10 h-10 text-[#f5f5f7] mb-4" />
              <h3 className="text-xl font-bold mb-2">專屬你的轉職指南</h3>
              <p className="text-[#86868b] text-sm mb-6">包含 15 項自我評估工具與 3 個月衝刺計畫，精準導航。</p>
              <button className="text-[#2997ff] text-sm font-semibold flex items-center hover:underline">
                在完整版中解鎖 <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-20 md:py-32 bg-[#1d1d1f] border-t border-[#424245] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#2997ff]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-[#000000] border border-[#424245] px-4 py-2 rounded-full mb-8">
            <span className="text-sm font-medium tracking-wide">完整版 Notion 數位資產包</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#f5f5f7]">
            掌握全局，<br />才能做出完美的職涯決策。
          </h2>
          <p className="text-xl text-[#86868b] mb-12 max-w-2xl mx-auto">
            一鍵複製至你的 Notion 工作區。包含 8 大章節、互動式技能檢核表、以及隨時更新的市場動態。投資你的 AI 職涯，從掌握真實數據開始。
          </p>
          
          <div className="bg-[#000000] border border-[#424245] rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between text-left max-w-3xl gap-8 md:gap-0 mx-auto mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">2026 台灣 AI 就業數據包</h3>
              <p className="text-[#86868b] mb-4">Lifetime Access • 即時更新至 v3.0</p>
              <ul className="space-y-2 text-sm text-[#f5f5f7]">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#34c759] mr-2"/> 1,538 筆職缺深度交叉分析</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#34c759] mr-2"/> 八大產業 & 四大職能薪資地圖</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#34c759] mr-2"/> 22 項 AI 技能排行與雷達圖</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#34c759] mr-2"/> 專屬自我評估與轉職 5 步指南</li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-[#86868b] line-through text-lg mb-1">NT$ 599</span>
              <span className="text-5xl font-bold text-[#f5f5f7] mb-6">NT$ 299</span>
              <button onClick={() => setShowModal(true)} className="bg-[#f5f5f7] text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:scale-105 transition-all w-full md:w-auto text-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                立即解鎖完整權限
              </button>
              <p className="text-xs text-[#86868b] mt-3 flex items-center">
                <Lock className="w-3 h-3 mr-1"/> 安全結帳，立即發送 Notion 連結
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-[#1d1d1f] py-12 text-center text-[#86868b] text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© 2026 Daniel Tsai | @danieltsai04</p>
          <p>資料來源：104 人力銀行 + 台灣就業通 (交叉比對第三方報告)</p>
          <p className="mt-8 text-xs text-[#424245]">設計靈感源自頂級科技品牌，為求職者打造的高質感閱讀體驗。</p>
        </div>
      </footer>
    </div>
  );
};

// 輔助組件：付款彈跳視窗
const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-[#1d1d1f] border border-[#424245] rounded-3xl p-6 md:p-8 md:p-10 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#86868b] hover:text-[#f5f5f7] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-2xl">💳</span>
          <h3 className="text-xl font-bold text-[#f5f5f7]">付款方式：銀行轉帳</h3>
        </div>

        <div className="h-px bg-[#424245] mb-6" />

        {/* Bank info */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <span className="text-lg">🏦</span>
            <div>
              <p className="text-[#86868b] text-xs mb-0.5">銀行</p>
              <p className="text-[#f5f5f7] font-medium">兆豐國際商業銀行（017）東台中分行</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg">💳</span>
            <div>
              <p className="text-[#86868b] text-xs mb-0.5">帳號</p>
              <p className="text-[#f5f5f7] font-mono font-semibold text-lg tracking-wider">07110351372</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg">👤</span>
            <div>
              <p className="text-[#86868b] text-xs mb-0.5">戶名</p>
              <p className="text-[#f5f5f7] font-medium">蔡士豪</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg">💰</span>
            <div>
              <p className="text-[#86868b] text-xs mb-0.5">金額</p>
              <p className="text-[#2997ff] font-bold text-2xl">NT$299</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#424245] mb-6" />

        {/* Instructions */}
        <div className="bg-[#000000] rounded-2xl p-4 border border-[#424245]">
          <p className="text-[#34c759] font-medium text-sm text-center">
            匯款完成後截圖私訊，24 小時內寄送 Notion 資源包 📕
          </p>
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="mt-6 w-full bg-[#f5f5f7] text-black py-3 rounded-full font-semibold hover:bg-white hover:scale-[1.02] transition-all"
        >
          我知道了
        </button>
      </div>
    </div>
  );
};

// 輔助組件：技能進度條
const SkillBar = ({ name, count, percentage, color, tag }) => (
  <div>
    <div className="flex justify-between items-end mb-1">
      <div className="flex items-center space-x-2">
        <span className="font-medium text-[#f5f5f7]">{name}</span>
        {tag && <span className={`text-[10px] px-2 py-0.5 rounded-sm bg-opacity-20 ${color} text-white`}>{tag}</span>}
      </div>
      <span className="text-xs text-[#86868b]">{count} 筆</span>
    </div>
    <div className="h-2 w-full bg-[#1d1d1f] rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} rounded-full`} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

// 輔助組件：雲端 Icon
const CloudIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

// 輔助組件：路線圖卡片
const RoadmapCard = ({ title, path, skills, app, highlight = false }) => (
  <div className={`rounded-3xl p-6 md:p-8 border transition-all ${highlight ? 'bg-[#1d1d1f] border-[#2997ff]/50 shadow-[0_0_30px_rgba(41,151,255,0.1)]' : 'bg-[#1d1d1f] border-[#424245] hover:border-[#86868b]'}`}>
    {highlight && <div className="text-[#2997ff] text-xs font-bold tracking-wider mb-4 uppercase">市場最高需求</div>}
    <h3 className="text-xl font-bold text-[#f5f5f7] mb-4">{title}</h3>
    <div className="space-y-4 text-sm">
      <div>
        <div className="text-[#86868b] mb-1">成長路徑</div>
        <div className="font-medium">{path}</div>
      </div>
      <div>
        <div className="text-[#86868b] mb-1">核心技能</div>
        <div className="font-medium text-[#f5f5f7]">{skills}</div>
      </div>
      <div>
        <div className="text-[#86868b] mb-1">常見應用</div>
        <div className="font-medium">{app}</div>
      </div>
    </div>
  </div>
);

export default App;
