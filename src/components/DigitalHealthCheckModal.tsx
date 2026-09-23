import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, AlertCircle, RefreshCw, Send, MessageSquare, Terminal, Activity } from 'lucide-react';
import { HEALTH_CHECK_QUESTIONS, COMPANY_INFO } from '../data/technixData';

interface DigitalHealthCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (service?: string) => void;
}

export const DigitalHealthCheckModal: React.FC<DigitalHealthCheckModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactOrg, setContactOrg] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  if (!isOpen) return null;

  const currentQ = HEALTH_CHECK_QUESTIONS[currentStep];
  const totalQuestions = HEALTH_CHECK_QUESTIONS.length;

  const handleSelectOption = (score: number) => {
    setAnswers({ ...answers, [currentQ.id]: score });
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateTotalScore = (): number => {
    const rawSum = (Object.values(answers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
    return Math.round((rawSum / (totalQuestions * 10)) * 100);
  };

  const getScoreVerdict = (score: number) => {
    if (score < 40) {
      return {
        level: 'High Operational Risk (Critical Vulnerabilities)',
        badgeColor: 'bg-red-950/80 text-red-400 border-red-800/60',
        summary: 'Your organisation relies heavily on manual paper processes, unprotected personal emails, and unbacked systems. A single laptop crash, theft, or phishing attempt could halt operations.',
        topRecommendations: [
          'Immediate migration to professional business email on your own domain (.mw/.com)',
          'Deploy automated off-site cloud backups to protect critical financial files',
          'Deploy a professional Business Starter website to establish client trust and capture inbound leads',
        ],
      };
    } else if (score < 75) {
      return {
        level: 'Moderate Digital Posture (Productivity Bottlenecks)',
        badgeColor: 'bg-amber-950/80 text-amber-400 border-amber-800/60',
        summary: 'You have basic digital tools in place, but they remain fragmented. Staff lose time on manual reconciliation, and lack of proactive maintenance leaves your systems vulnerable.',
        topRecommendations: [
          'Enroll in TechNix Care monthly support for proactive IT maintenance and patch hygiene',
          'Automate sales, inventory, or member records with a tailored web database portal',
          'Upgrade your web presence with WhatsApp click-to-inquire and mobile speed tuning',
        ],
      };
    } else {
      return {
        level: 'Strong Digital Infrastructure (Ready for Scale)',
        badgeColor: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60',
        summary: 'You have solid core technology foundations. Your next phase is workflow automation, executive Power BI dashboards, and staff upskilling in AI productivity tools.',
        topRecommendations: [
          'Deploy Power BI executive dashboards for instant quarterly financial & donor reporting',
          'Upskill department managers via TechNix Academy hands-on cohorts',
          'Explore custom mobile applications to empower your remote field personnel',
        ],
      };
    }
  };

  const isCompleted = Object.keys(answers).length === totalQuestions;
  const score = calculateTotalScore();
  const verdict = getScoreVerdict(score);

  const handleWhatsAppResults = () => {
    const text = `📊 DIGITAL HEALTH CHECK AUDIT RESULTS:
Organisation: ${contactOrg || 'My Organisation'}
Contact: ${contactName || 'Director'} (${contactPhone || 'Phone'})
Overall Score: ${score}/100
Status: ${verdict.level}

I would like to discuss TechNix's recommendations to improve our digital operations.`;

    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel-elevated rounded-3xl max-w-xl w-full shadow-2xl border border-slate-700/80 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Header */}
        <div className="p-6 bg-slate-900/90 border-b border-slate-800 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shadow-inner">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-sky-400 uppercase tracking-widest mb-0.5">
                <Terminal className="w-3 h-3" />
                <span>DIAGNOSTIC ENGINE</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Digital Business Health Check</h3>
              <p className="text-xs text-slate-300">Evaluate your technology maturity & discover hidden bottlenecks</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close health check modal"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>Audit Question {currentStep + 1} of {totalQuestions}</span>
                  <span className="font-bold text-sky-400">
                    {Math.round(((currentStep + 1) / totalQuestions) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-sky-500 transition-all duration-300 shadow-md shadow-sky-500/50"
                    style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/40 px-2.5 py-1 rounded-md inline-block mb-3">
                  {currentQ.category}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Select the option that most accurately represents your office&apos;s daily operations:
                </p>
              </div>

              {/* Answer Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full p-4 text-left rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-900 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white font-medium">
                      {opt.text}
                    </span>
                    <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={`flex items-center space-x-1.5 font-mono ${
                    currentStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:text-white cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Question</span>
                </button>
                <span className="text-[11px] font-mono text-slate-400">Takes under 2 minutes</span>
              </div>
            </div>
          ) : (
            /* Completed Results View */
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold border shadow-md">
                  <span className={`px-2 py-0.5 rounded-full ${verdict.badgeColor}`}>
                    {verdict.level}
                  </span>
                </div>

                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                    {score}
                  </span>
                  <span className="text-sm font-mono text-slate-400">/ 100</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  {verdict.summary}
                </p>
              </div>

              {/* Top Recommendations */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Top Recommended Infrastructure Upgrades:
                </span>
                {verdict.topRecommendations.map((rec, rIdx) => (
                  <div key={rIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              {/* Direct Next Step */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppResults}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Results to TechNix on WhatsApp</span>
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    onClick={() => {
                      setAnswers({});
                      setCurrentStep(0);
                    }}
                    className="text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer font-mono"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-white cursor-pointer font-mono"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
