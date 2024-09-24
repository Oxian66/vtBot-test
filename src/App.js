// Copyright 2023 imvi labs & Malgorzata Pick
import { Fragment, useEffect } from "react";
import VisionTestApp from "./components/visionTestApp/VisionTestApp";


const App = () => {
  // Получение объекта WebApp API
  const TelegramWebApp = window.Telegram.WebApp;

  // Используем useEffect для инициализации WebApp
  useEffect(() => {
    // Сообщаем Telegram, что WebApp готово к работе
    TelegramWebApp.ready();

    // Опционально: можно настроить цвет заголовка
    TelegramWebApp.MainButton.setText("Закрыть приложение");
    TelegramWebApp.MainButton.show();

    // Можно получить информацию о пользователе
    console.log('User data:', TelegramWebApp.initDataUnsafe);

    // Опционально: Закрытие приложения при нажатии на кнопку
    TelegramWebApp.MainButton.onClick(() => {
      TelegramWebApp.close();
    });

    return () => {
      // Удаляем обработчик события при размонтировании компонента
      TelegramWebApp.MainButton.offClick(() => {
        TelegramWebApp.close();
      });
    };
  }, [TelegramWebApp]);
  return (
    // Returning main app component
    <Fragment>
      <VisionTestApp />
    </Fragment>
  );
};

export default App;
