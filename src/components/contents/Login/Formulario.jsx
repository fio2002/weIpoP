import React from 'react'

function Formulario() {
  return (
    <>
    <input></input>
    </>
  )
}

export default Formulario





<?php
include("header.php");
?>

<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">    


<style>        
        
        /* Estilo para el contenedor principal */
        .login-container {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            display: flex;
            width:100%;
            max-width: 100%;
          
            align-items: center;
        }

        /* Estilo para el contenedor de la imagen */
        .image-container {
            flex: 2;
    
            overflow: hidden;
            background-image: url("assets/img/gallery/gallery-5.jpg");
            background-size: cover;
            background-repeat: no-repeat;
          
            height: 60vh;
            width: 100%;
        }

        /* Estilo para centrar la imagen */
        .centered-image {
            display: block;
            margin: 1 auto;
            width: 85%;
            height: auto;
        }

        /* Estilo para el formulario */
        .form-container {
            flex: 1;
            padding: 10px;
           
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 15px;
            width: 100%;
            max-width: 300px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="password"] {
            width: 300px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
               /* Estilo para el botón de alternancia del ojo */


        button {
            background-color: #0044ffe8;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            align-items: center;
        }

        button:hover {
            background-color: #9ab6d4;
        }

        /* Estilo para el contenedor del campo de contraseña y el icono */
        .password-container {
            position: relative;
        }

        .password-container input[type="password"] {
            padding-right: 30px;
        }

        .password-container #togglePassword {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            cursor: pointer;
            width: 30px;
            height: auto;
        }

        /* Ocultar la imagen de fondo cuando el ancho de la pantalla sea menor a 768px */
        @media (max-width: 700px) {
            .image-container {
                display: none;
            }
        }

        /* Estilo para centrar el botón en el div */
.form-group1 {
  text-align: center;
  /* Puedes añadir padding, margen o cualquier otro estilo según tus preferencias */
}


    </style>




		
		
				<section class="page-top page-header-4">
		<div class="container">
	<div class="row align-items-center justify-content-end">
		<div class="col-lg-6">
			<h1 class="page-title">Acceso de Empleados</h1>
					</div>
					<div class="breadcrumbs-wrap col-lg-6">
				<ul class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList"><li class="home" style="margin-right: 5px" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemtype="http://schema.org/Thing" itemprop="item" href="index.php" title="Go to Home Page"><span itemprop="name">Inicio</span><meta itemprop="position" content="1" /></a></li><i class="bi bi-chevron-right" style="margin-right: 5px;"></i><li>Acceso de Empleados</li></ul>			</div>
					</div>
</div>
	</section>
	
		<div id="main" class="column1 wide clearfix"><!-- main -->

			<div class="container-fluid">
			<div class="row main-content-wrap">

			<!-- main content -->
			<div class="main-content col-lg-12">

			
	<div id="content" role="main">
				
			<article class="post-3384 page type-page status-publish hentry">
				
				<span class="entry-title" style="display: none;">Acceso de Empleados</span><span class="vcard" style="display: none;"><span class="fn"><a href="author/webmaster/" title="Publicados por webmaster" rel="author">webmaster</a></span></span><span class="updated" style="display:none">2021-10-05T19:06:14-05:00</span>
				<div class="page-content">
					<div class="vc_column_container col-md-2"><div class="wpb_wrapper vc_column-inner"></div></div><div class="vc_column_container col-md-8"><div class="wpb_wrapper vc_column-inner"></div></div><div class="vc_column_container col-md-2"><div class="wpb_wrapper vc_column-inner"></div></div><div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true" class="vc_row wpb_row row vc_row-no-padding vc_row-o-equal-height vc_row-flex"><div class="vc_column_container col-md-12"><div class="wpb_wrapper vc_column-inner">
	<div class="wpb_single_image wpb_content_element vc_align_center">
		
	</div>
</div></div></div><div class="vc_row-full-width vc_clearfix"></div><div class="vc_row wpb_row row"><div class="vc_column_container col-md-2"><div class="wpb_wrapper vc_column-inner"></div></div><div class="vc_column_container col-md-8"><div class="wpb_wrapper vc_column-inner"><div class="vc_empty_space"   style="height: 20px"><span class="vc_empty_space_inner"></span></div>
	<div class="wpb_text_column wpb_content_element " >
		
	
    
    <div class="login-container">
        <div class="image-container"></div>
        <div class="form-container">
                        
            <h2 style="color: #0044ffe8;"><b>Iniciar Sesión</b></h2>                        

            <img src="assets/img/logoipo.jpg" alt="Imagen de Bienvenida" class="centered-image">

            <br/>

            <form method="post" action="login.php">
                <div class="form-group">
                    <label for="username" style="color: #0044ffe8;">Usuario</label>
                    <input type="text" id="username" placeholder="Por favor, ingresa tu código de usuario" name="txtusuario" required>
                </div>
                <div class="form-group">
                    <label for="password" style="color: #0044ffe8;">Contraseña</label>
                    <input type="password" id="password" placeholder="Y aquí tu contraseña" name="txtpassword" required>
                </div>
                <br/>
                <div class="form-group1">
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </div>
    </div>
    



	</div>
</div></div><div class="vc_column_container col-md-2"><div class="wpb_wrapper vc_column-inner"></div></div></div>
				</div>
			</article>
					
	</div>

		

</div><!-- end main content -->

<div class="sidebar-overlay"></div>

	</div>
	</div>


		
			
			</div><!-- end main -->

			
<?php
include("footer.php");
?></link>