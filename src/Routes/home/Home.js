import React, { Component } from 'react';
import '../../components/css/style.css'
import Card from '../../components/card'
import Header from '../../components/Header'

class Index extends Component{
    render(){
        return(
            <div className="col-md-12">
            
                <div className="triangulo-equilatero-bottom-left"></div>
                <div className="row">
                <Header/>
                    

                </div>
                
                <div class="container">
                    <div class="row row-centered" style={{'margin-top':'150px'}}>
                        <h2 className="row">
                            ! Bienvenido al Proyecto  <span style={{color:'#6200ee'}}> Blue</span>Flame!
                        </h2>
                        <div className="row">
                            <p className="col-md-8" style={{fontSize:"24px"}}>
                                Tenemos todas las herramientas necesarias para conciliar estados de cuenta
                            </p>
                       </div>

                        <Card 
                            Img="https://material-design.storage.googleapis.com/publish/wear_v_1/social.png" 
                            TitleImage="Settings" 
                            TittleCard="Configurar"
                            CardContent="BlueFlame te permite configurar Empresas, Bancos, Cuentas e inclusive monedas"
                            Link="/settings"
                            ValueButton="Configurar"
                        />
                        <Card 
                            Img="https://cdn.dribbble.com/users/473527/screenshots/3324572/cloudkul.png" 
                            TitleImage="Database" 
                            TittleCard="Información del Sistema"
                            CardContent="Ingresa la información bancaria registrada en tu sistema"
                            Link="/database"
                            ValueButton="Alimentar base de datos"
                        />
                        <Card 
                            Img="https://s-media-cache-ak0.pinimg.com/originals/26/63/be/2663bed52fe32f89227eedb5c07940bc.jpg" 
                            TitleImage="Conciliar" 
                            TittleCard="Conciliaciones"
                            CardContent="Puedes empezar a realizar tus conciliaciones bancarias o seguir las que tienes hechas"
                            Link="/database"
                            ValueButton="Conciliar"
                        />
                        <Card 
                            Img="https://i.pinimg.com/736x/24/f1/0a/24f10a8790ece34f05c6570b0f26ef5c--material-design-illustration-design-illustrations.jpg" 
                            TitleImage="Profile" 
                            TittleCard="Perfil"
                            CardContent="Cambia tus datos de inicio de session, nombre, firma, entre otros."
                            Link="/profile"
                            ValueButton="Administrar cuenta"
                        />

                    </div>
                </div>
            </div>
        );
    }
}
  
export default Index;
