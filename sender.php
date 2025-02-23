<?php
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Валидируем данные из формы
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';

    // Проверяем, чтобы поля не были пустыми
    if (!empty($phone) && !empty($name)) {
        // Адрес получателя
        $to = "sasho11090@gmail.com"; 

        // Формируем тему письма
        $subject = "Заявка с сайта ремонт під ключ";

        // Формируем содержимое письма
        $message = "Телефон: $phone\n";
        $message .= "Имя: $name\n";

        // Заголовки письма
        $headers = "From: LizenaLanding <no-reply@yourdomain.com>\r\n";
        $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
        $headers .= "Content-type: text/plain; charset=utf-8\r\n";

        // Отправляем письмо
        if (mail($to, $subject, $message, $headers)) {
            echo htmlspecialchars("Успіх");
        } else {
            echo htmlspecialchars("Помилка при відправці");
        }
    } else {
        // Если одно из полей пустое
        echo htmlspecialchars("Заповніть всі поля");
    }
} else {
    // Если форма не была отправлена, выведем сообщение об ошибке
    echo htmlspecialchars("Помилка: форма не відправлена");
}
?>
