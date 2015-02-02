<?php





function heroezfit_preprocess_node(&$variables) {
    $node = $variables['node'];
	
	echo 98;
	exit;
    if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
        $variables['classes_array'][] = 'node-full';
    }
    $variables['date'] = t('!datetime', array('!datetime' =>  date('j F Y', $variables['created'])));
    if (  $variables['node']->type == 'banner_image') {
        $variables['title'] = FALSE;
        $variables['content']['links'] = FALSE;
        
    }

    


}


?> 