<?php
define( 'WP_CACHE', true );
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
define( 'DB_NAME', 'u461202860_AJUMS' );

/** Database username */
define( 'DB_USER', 'u461202860_degPE' );

/** Database password */
define( 'DB_PASSWORD', 'Uc93rOs2zb' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

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
define( 'AUTH_KEY',          'CG1820H;,;Av^~=7IN!RydOw&QqHe&4!` Mm?{[N,ZHL; W<jI<hZ*B#3eHYYz%`' );
define( 'SECURE_AUTH_KEY',   'o4IXgB]}r!yEll-^(~7MYw^xI.+4JS(nHYR~Yy.2^HuHSI7FL aDt8*wPtv?;6:3' );
define( 'LOGGED_IN_KEY',     'h@VeIILH^GcKqAjinxStfB=^})EFZ1$*D(Y|-l<ti1<`W9O>A63_:M_D(!eZ=4S&' );
define( 'NONCE_KEY',         'WrEQQm|Dx<:npGk%d;+*b)lo&2+<Nm+^gb}>$$DIaU;)}~D)L%`;ZD(afU+1Tc:3' );
define( 'AUTH_SALT',         '$+To-uM`|3CPZHn`c>[$`GE?(]9U%}L2L,23y%ABaA N~u7i2C)4kz-_j?>oJCV;' );
define( 'SECURE_AUTH_SALT',  '>K3YYnLb1^EC^#N1pM3s-7LPgiS`XB*BO<3T~PDt-}9W]wW6Y-){lIe1P}p7t61%' );
define( 'LOGGED_IN_SALT',    'U{9CzNW6=`I C5(T[z;YLi=yp8HLLZ~Yy?Z~xM8mN<|3d8wi&,lc5 Q4?NA3V}:4' );
define( 'NONCE_SALT',        '1j8.t8k[-ym,e :S8F.Krr^v}aH@!n;:srCVu$lMsSfSac Wqe)a7s>aUePwpRk{' );
define( 'WP_CACHE_KEY_SALT', '0|6JrIY,|~rY5k+ms&x~ ~Ez3G6}%>?3;KtB.YSwP1>K?hzZM-uQ3YSjGp=)3b}D' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
