import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tradingSignals = [
    {
      pair: "EUR/USD",
      action: "BUY",
      confidence: 95,
      profit: "+2.3%",
      time: "14:32",
    },
    {
      pair: "GBP/JPY",
      action: "SELL",
      confidence: 87,
      profit: "+1.8%",
      time: "14:28",
    },
    {
      pair: "USD/CHF",
      action: "BUY",
      confidence: 92,
      profit: "+3.1%",
      time: "14:15",
    },
  ];

  const features = [
    {
      icon: "TrendingUp",
      title: "Автоматические сигналы",
      description:
        "ИИ анализирует рынок 24/7 и генерирует точные торговые сигналы",
    },
    {
      icon: "BarChart3",
      title: "Аналитика в реальном времени",
      description: "Мониторинг всех валютных пар с обновлением каждую секунду",
    },
    {
      icon: "Shield",
      title: "Риск-менеджмент",
      description: "Встроенная система управления рисками для защиты капитала",
    },
    {
      icon: "Smartphone",
      title: "Мобильные уведомления",
      description: "Получайте мгновенные push-уведомления о новых сигналах",
    },
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "2990₽",
      features: ["5 сигналов в день", "Основная аналитика", "Email поддержка"],
      popular: false,
    },
    {
      name: "Профессиональный",
      price: "5990₽",
      features: [
        "Безлимитные сигналы",
        "Расширенная аналитика",
        "Риск-менеджмент",
        "Приоритетная поддержка",
      ],
      popular: true,
    },
    {
      name: "Эксперт",
      price: "9990₽",
      features: [
        "Все возможности Pro",
        "Личный аналитик",
        "API доступ",
        "Индивидуальные стратегии",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" className="text-emerald-400" size={28} />
          <span className="text-xl font-bold text-white">ForexPro AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#analytics"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Аналитика
          </a>
          <a
            href="#features"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Возможности
          </a>
          <a
            href="#pricing"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Тарифы
          </a>
          <a
            href="#cabinet"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Личный кабинет
          </a>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          <Icon name="User" size={16} className="mr-2" />
          Войти
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            🤖 ИИ торговая система
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Автоматические
            <span className="text-emerald-400"> торговые сигналы</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Революционная система на основе искусственного интеллекта, которая
            генерирует точные торговые сигналы для рынка Forex 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Начать торговать
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Live Trading Signals */}
      <section id="analytics" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Живые торговые сигналы
            </h2>
            <p className="text-slate-300 text-lg">
              Актуальные сигналы, сгенерированные нашим ИИ прямо сейчас
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tradingSignals.map((signal, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">
                      {signal.pair}
                    </CardTitle>
                    <Badge
                      className={
                        signal.action === "BUY"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                          : "bg-red-500/20 text-red-400 border-red-500/30"
                      }
                    >
                      {signal.action}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Уверенность:</span>
                      <span className="text-white font-semibold">
                        {signal.confidence}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Прибыль:</span>
                      <span className="text-emerald-400 font-semibold">
                        {signal.profit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Время:</span>
                      <span className="text-slate-300">{signal.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-slate-700 hover:bg-slate-600 text-white">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить сигналы
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Возможности программы
            </h2>
            <p className="text-slate-300 text-lg">
              Всё необходимое для успешной торговли на Forex
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-emerald-500/20 rounded-full w-fit">
                    <Icon
                      name={feature.icon}
                      className="text-emerald-400"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Выберите свой тариф
            </h2>
            <p className="text-slate-300 text-lg">
              Начните зарабатывать на Forex уже сегодня
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${plan.popular ? "bg-emerald-500/10 border-emerald-500/50 relative" : "bg-slate-800/50 border-slate-700"} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-300"
                      >
                        <Icon
                          name="Check"
                          className="text-emerald-400 mr-2"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600" : "bg-slate-700 hover:bg-slate-600"} text-white`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="TrendingUp" className="text-emerald-400" size={24} />
            <span className="text-lg font-bold text-white">ForexPro AI</span>
          </div>
          <p className="text-slate-400 mb-6">
            Революционная торговая система на основе искусственного интеллекта
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Условия использования
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
