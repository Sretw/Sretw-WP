<?php 
// hey day
    if(isset($_SERVER['HTTP_X_FORWARDED_PROTO'] )) {
      if (strpos( $_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) {
        $_SERVER['HTTPS']='on';
      }
    };
    define( 'WP_MEMORY_LIMIT', '128M' );
    define( 'WP_MAX_MEMORY_LIMIT', '256M' );
    define( 'FS_METHOD', 'direct');
    define( 'AUTOSAVE_INTERVAL', 160 );
    define( 'WP_POST_REVISIONS', 5 );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '810705_0f9315c1457e607104fba3ebc13930ef' );
/** MySQL database username */
define( 'DB_USER', 'easywp_857940' );
/** MySQL database password */
define( 'DB_PASSWORD', 'lxfnZa58QjWgkUc/N7dZHVO4JVV+vDUhu4Ghk7TRXv8=' );
/** MySQL hostname */
define( 'DB_HOST', 'mysql-cluster-4-db-mysql-master.database.svc.cluster.local' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'wsx+J6z}ct#%%T$lc1Sfj~y+$&y{SSu^#_nqowa^d]QKxIuTew3vX]dqIj`s#j[e' );
define( 'SECURE_AUTH_KEY',   'RWa>&ohvfhly5j]FU-77VdI1*l{9anDk?9u_u?ZjCLDd6{ln hXADt<_ y$j&MB;' );
define( 'LOGGED_IN_KEY',     '@ZrkG&D&RlQ:3*p3D`|)h5xI-T]HC+l)~Nz{s#.)bw_dwAiqKfkwB2EP)*OM7V (' );
define( 'NONCE_KEY',         'y``=4]A90Z mT+~x-5gMu?@&GUVt+[Sh9=!F9?U.-JCA]:V7b!P`)wkNwI5#8KzH' );
define( 'AUTH_SALT',         'zHCD5Pr&kL;/QN-I.*w}t|b5^sGs/^pusQPBPS{>AAx}?&9YQ2%bBMN WhQrync1' );
define( 'SECURE_AUTH_SALT',  'Y,Dp5L9%J<_inmPZs&>Rf_L)|%,)Qqqk6moF.&Y) 7u3E=R{}Q<$cO}Jrwf-3Xt/' );
define( 'LOGGED_IN_SALT',    'g8Eru fo:v$)YXi5QxUNF&42JY|ey.92$|*TH`lmcsdKi6pBX`y`zT@NOkQ Yi_>' );
define( 'NONCE_SALT',        '8IZYSS#],WK WL?8(qX ~yH!bk~b7jXOKxEL^hi:m_?=qqPt;rs~iM.X=Psp`1/3' );
define( 'WP_CACHE_KEY_SALT', 'yH^`sB^wags<UA=MvKX<F6o>WiRS=D2p^$ K}`V?76A9i^2hJ)({Bdq;rqh6zm1p' );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
