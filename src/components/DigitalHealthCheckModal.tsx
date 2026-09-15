import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, AlertCircle, RefreshCw, Send, MessageSquare } from 'lucide-react';
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
    // 6 questions, max 10 points each = 60 max raw points. Rescale to 0 - 100%
    return Math.round((rawSum / (totalQuestions * 10)) * 100);
  };

  const getScoreVerdict = (score: number) => {
    if (score < 40) {
      return {
        level: 'High Operational Risk (Critical Gaps)',
        badgeColor: 'bg-red-100 text-red-800 border-red-200',
        summary: 'Your business is relying heavily on manual paper processes, unprotected personal emails, and fragile unbacked systems. A single laptop theft, crash, or phishing scam could cause devastating operational and financial losses.',
        topRecommendations: [
          'Immediate migration to professional business email on your own domain',
          'Deploy automated off-site cloud backups to protect critical spreadsheets and accounting data',
          'Launch a professional Business Starter website to establish client trust and capture inbound leads',
        ],
      };
    } else if (score < 75) {
      return {
        level: 'Moderate Digital Foundation (Growth Bottlenecks)',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        summary: 'You have some digital tools running, but they are fragmented. Staff are spending too much time on repetitive manual work, and lack of proactive maintenance leaves your network vulnerable to downtime.',
        topRecommendations: [
          'Sign up for TechNix Care monthly support for proactive IT maintenance and antivirus updates',
          'Automate sales, inventory, or student records with a custom software database',
          'Upgrade your web presence with WhatsApp click-to-inquire and Google Search SEO',
        ],
      };
    } else {
      return {
        level: 'Strong Digital Agility (Ready to Scale)',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        summary: 'You have established good technology habits. Your next frontier is deep workflow automation, executive Power BI dashboards, and staff upskilling in AI productivity tools.',
        topRecommendations: [
          'Enroll management and key staff in TechNix Academy Power BI and AI for Business courses',
          'Implement inter-branch VPN and advanced endpoint network defense',
          'Build customer self-service portals to reduce administrative workload',
        ],
      };
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = calculateTotalScore();
  const verdict = getScoreVerdict(score);

  const handleWhatsAppResults = () => {
    const msg = `Hello TechNix, I completed the Digital Business Health Check for ${contactOrg || 'my business'}. My score was ${score}/100 (${verdict.level}). I would like to schedule my free 15-minute consultation review.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Digital Business Health Check</h3>
              <p className="text-xs text-slate-300">Free 2-minute diagnostic audit for African businesses & NGOs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {!submitted && Object.keys(answers).length < totalQuestions ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                  <span>Question {currentStep + 1} of {totalQuestions}</span>
                  <span className="text-blue-700 font-bold">{currentQ.category}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h4 className="text-xl font-bold text-slate-900 mb-6 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-sm font-medium text-slate-800 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1 font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous question</span>
                </button>
              )}
            </div>
          ) : !submitted ? (
            /* Lead Capture Step before unveiling results */
            <div>
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Audit Completed!
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900 mt-3">
                  Where should we email your personalized Health Check Report?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Enter your details to reveal your digital score and claim your free 15-minute consultation review with a TechNix Systems Engineer.
                </p>
              </div>

              <form onSubmit={handleFinish} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Kondwani Chirwa"
                    className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business / Organisation</label>
                    <input
                      type="text"
                      required
                      value={contactOrg}
                      onChange={(e) => setContactOrg(e.target.value)}
                      placeholder="e.g. Apex Agro Logistics"
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+265 999 000 000"
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Reveal My Digital Score & Recommendations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="text-center p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Digital Readiness Score for {contactOrg || 'Your Business'}
                </span>

                <div className="flex items-center justify-center space-x-3 my-3">
                  <div className="text-5xl font-black text-slate-900 tracking-tight">
                    {score}
                    <span className="text-2xl text-slate-500 font-semibold">/100</span>
                  </div>
                </div>

                <div className="inline-block">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${verdict.badgeColor}`}>
                    {verdict.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed max-w-lg mx-auto">
                  {verdict.summary}
                </p>
              </div>

              {/* Priority Action Checklist */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Recommended Immediate Next Steps:
                </h5>
                <div className="space-y-2">
                  {verdict.topRecommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleWhatsAppResults}
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Results to TechNix</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote(`Digital Assessment Follow-up (Score: ${score}/100)`);
                    }}
                    className="py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <span>Request Free 15-Min Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-semibold py-1 flex items-center justify-center space-x-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retake the assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
