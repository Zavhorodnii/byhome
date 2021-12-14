<?php

add_action('wp_ajax_ajax_send_form', 'ajax_send_form');
add_action('wp_ajax_nopriv_ajax_send_form', 'ajax_send_form');


function ajax_send_form(){
    if(!isset($_POST['name']) || !isset($_POST['phone']) ){
        $result = array(
            'result'    => 'error1',
        );
        echo json_encode($result);
        die();
    }
    $title = $_POST[ 'title' ];
    $url = $_POST[ 'url' ];

    $mail = get_field('email_order', 'options');

    $add_info = '';

    if($title !== 'none') {
        $add_info = "\r\n" . 'Оглавление: ' . $title;
        $add_info .= "\r\n" . 'Адрес: ' . $url;
    }

    $mail_massage = $add_info . "\r\n" .'Имя: ' . $_POST['name'] . "\r\n" .'Номер телефона: ' . $_POST['phone']  ;

    $headers = 'From: Сообщение с  <byhome/@byhome.com>' . "\r\n";
    $success = wp_mail($mail, 'Сообщене с формы', $mail_massage, $headers);

    if ($success){
        $result = array(
            'result'    => 'ok',
        );
    } else{
        $result = array(
            'result'    => 'error2',
        );
    }
    echo json_encode($result);
//    var_export($result);
    die();
}