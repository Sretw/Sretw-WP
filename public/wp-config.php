<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          's_]++!Ehb_KCbtgR(*F~x(0(b6g$VaOpLISYqTsYf$R6J$`~XOF=JRc2N0&$v{ne' );
define( 'SECURE_AUTH_KEY',   'qjN@xZ1.ak2k,tVxr^vc:RnU<YsjO=:7>&||qW#.[KOeswA>:|8=Go1rqj3&2!7k' );
define( 'LOGGED_IN_KEY',     'p2p~c*jt(3.d1hO[Ehqe!%!X)JpuVJ,12)5Pj>q/ESg~QbSB+K-`]CTvQIjoj#lv' );
define( 'NONCE_KEY',         'Z?aGc$qv]<O-b1z!lGfouXpG!75I-s-mb=Ys2wa>B%NdX0tEc_ETB&[F,trd0Q/:' );
define( 'AUTH_SALT',         '`=!qksub$8cT8pK^7$]ACuf4b Uv>uqasmc7aAtWy$%%?Wm.g,fRTm5*Yfl FA3;' );
define( 'SECURE_AUTH_SALT',  'Xjrm ~E$95`B0s0s?n+f]E lY<$iRf;X&nK^Nm;*z=6(RlWK}+7J,FVQ9>r:Li4#' );
define( 'LOGGED_IN_SALT',    '$7l!iycx)t~Qu^E)ra0vhBh|znC!!mx%E/-J# W7Wn gw6sGpD=Tj_y?yD6aZsJv' );
define( 'NONCE_SALT',        'l1[i1^q`$(oO,Tj~&(DQO8R@smutY:mG0cFfh?_%9|SUzaXam+1kxRXAu5C_gLXb' );
define( 'WP_CACHE_KEY_SALT', 'zibfkUPS*NlGdsV6uMRQS0<5b <!ewB3os`a45{m+_5bMc|gIV$*[K#bggu@[Nb`' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
