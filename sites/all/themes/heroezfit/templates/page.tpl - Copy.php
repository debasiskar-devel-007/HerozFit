<div class="top-block">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <?php if ($logo): ?>
                    <div class="logo-div"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a></div>
                    <?php endif; ?>

            </div>
            <div class="col-md-6">
                <div class="top-login-div">
                    <?php
                        global $user;

                        /*global $base_url;
                        echo $current_path = $base_url . '/' . current_path();
                        exit;*/
                        if ( !$user->uid ) {
                        ?>


                        <a href="<?php echo $GLOBALS['base_url'] ; ?>/user/login"  class="login-link">Login</a>
                        <a href="<?php echo $GLOBALS['base_url'] ; ?>/user/register" class="signup-link">Sign Up</a>


                        <?php
                        }
                        else{
                        ?>

                        <a class="logout" href="<?php echo $GLOBALS['base_url'] ; ?>/user/logout"> <?php /*var_dump( $GLOBALS['user']->roles);*/ ?>Log out</a>

                        <?php
                        }
                    ?>
                    <a href="<?php echo $GLOBALS['base_url'] ; ?>/node/add/post" class="postad-link">Post A Free Ad</a>
                    <div class="clear"></div>

                </div>

                <div class="clear"></div>


            </div>

        </div>

    </div>
</div>

<div class="menu-wrapper">
    <div class="container">
        <h1><?php echo date('l, F d, Y'); ?></h1>
        <div class="nav-bg">
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <?php
                            if (module_exists('i18n_menu')) {
                                $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
                            } else {
                                $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
                            }
                            print drupal_render($main_menu_tree);
                        ?>


                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>

        </div>

    </div>

</div>

<div class="container">
    <div class="main-body">

        <div class="row">

            <?php  if(@$node)if(@node_type_get_name(@$node)=='Post')
                    {

                    ?>
                    <h2> <span><?php print $title ; ?></span></h2>
                    <?php
                    }

            ?>

            <?php print render($page['content']); ?>



            <!-- <div class="col-md-4">
            <div class="ad-block1"><img src="images/ad1.png"  alt="#"/></div>

            </div>-->

        </div>






    </div>



</div>

<div class="footer-block">
    <div class="container">
        <div class="row">
            <div class="col-md-4"><p> &copy; 2014 Bargain Community. All rights reserved.</p></div>
            <div class="col-md-4">
                <ul>
                    <li style="padding-top:0;"><a href="<?php echo $GLOBALS['base_url'] ; ?>/contact-us">Contact Us</a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/help-listing">Help</a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/terms-service">Terms Of Service</a></li>
                    <li style="border:none;"><a href="<?php echo $GLOBALS['base_url'] ; ?>/privacy-statement">Privacy Statement</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <div class="footer-logo"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a></div>

            </div>


        </div>
    </div>
</div>






<?php
    global $user;

    /*global $base_url;
    echo $current_path = $base_url . '/' . current_path();
    exit;*/
    //var_dump( $user->roles);
    //exit;
    if ( array_key_exists(4,$user->roles)) {
    ?>
    }

    <div class="menu-div-body">
        <ul>
            <li><a href="<?php echo $GLOBALS['base_url'] ; ?>">Home</a></li>
            <li>
                Manage User
                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/user-listing-general-users">General User Listing</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/user-listing-dealers">Dealer Listing</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/<?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>/edit">Edit Your Profile</a></a></li>

                </ul>
            </li>
            <li>
                Manage Banner
                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/12/edit">Banner 1</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/13/edit">Banner 2</a></a></li>

                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/17/edit">Banner 3</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/19/edit">Banner 4</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/20/edit">Banner 5</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/21/edit">Banner 6</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/22/edit">Banner 7</a></a></li>

                </ul>
            </li>
            <li>Manage Help

                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/add/help">Add a Help</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/help-listing-admin">List Help</a></a></li>


                </ul>


            </li>
            <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/99/webform-results/table">Contact Lists</a></li>

            <li>
                Manage Post
                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/add/post">Post a Free Add</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/post-listing">View All Post</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/post-listing-own/
                            <?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>

                            ">View Your Posts</a></a></li>


                </ul>
            </li>

  <div class="clear"></div>
        </ul>
        <div class="clear"></div>

    </div>

    <?php
    }
?>

<?php
    if ( array_key_exists(5,$user->roles)) {
    ?>
    }

    <div class="menu-div-body">
        <ul>
            <li>Home</li>
            <li>
                Manage User
                <ul>

                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/<?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>/edit">Edit Your Profile</a></a></li>

                </ul>
            </li>


            <li>Contact</li>

            <li>
                Manage Post
                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/add/post">Post a Free Add</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/post-listing-own/<?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>

                            ">View My Posts</a></a></li>


                </ul>
            </li>


        </ul>
        <div class="clear"></div>

    </div>

    <?php
    }
?>


<?php
    if ( array_key_exists(6,$user->roles)) {
    ?>
    }

    <div class="menu-div-body">
        <ul>
            <li>Home</li>
            <li>
                Manage User
                <ul>

                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/<?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>/edit">Edit Your Profile</a></a></li>

                </ul>
            </li>


            <li>Contact</li>

            <li>
                Manage Post
                <ul>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/node/add/post">Post a Free Add</a></a></li>
                    <li><a href="<?php echo $GLOBALS['base_url'] ; ?>/post-listing-own/<?php
                                global $user;

                                /*global $base_url;
                                echo $current_path = $base_url . '/' . current_path();
                                exit;*/
                                echo $user->uid;  ?>

                            ">View My Posts</a></a></li>


                </ul>
            </li>


        </ul>
        <div class="clear"></div>

    </div>

    <?php
    }
?>













