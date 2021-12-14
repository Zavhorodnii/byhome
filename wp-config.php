<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'byhome' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'uI}Qh7&OE~:b?C0h$orNOD#dSxm3P!]D^AJEi>$}.R{zTvZd{**6`I<^~EBEKU?=' );
define( 'SECURE_AUTH_KEY',  'fqfZCa}pcj^2y9&*oFP]!FQ@c@rFLEs8poXIr@/$=dx%Rg^)XDHymKvjXn;Dp1v5' );
define( 'LOGGED_IN_KEY',    'G,{8szEgk/`S=fhQlZA3z4(U9Eh^/--jT!h8W,8L*9w8::>so1}>GLr9}6:pLh:>' );
define( 'NONCE_KEY',        'dbVm[0>oua|$ybAnp5H]S8(~csri-es+zy`z|*4odjWMJXbcu$A-D?$S:R,t#Gjn' );
define( 'AUTH_SALT',        't[B=W0kSgAz8e1i{(c3/-TxFpcQK)qgEe]QY7E_H-jiNJu7vW0U*mx]+2Q@^Z 0E' );
define( 'SECURE_AUTH_SALT', 'A=J%yz?Oz+KMIE [qGo5Pv;B^#4?DmICYcrIAefGvX[1 &a]5Jiz>{[R;%d_d3-v' );
define( 'LOGGED_IN_SALT',   'rRI+#ttO&>vU}>0orhoq-lpBmew1gW{ihU>wOErNv,kbdBKh2T]r8TeYctBkdxr]' );
define( 'NONCE_SALT',       ':5+Uj_>>i]A8Qa.{m%!KJvTU<*D?)YCZ/u7h$Dsu;*ibvO,(^!XOxd3Ctx6L1C1n' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
