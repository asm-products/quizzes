Rails.application.routes.draw do
  root 'pages#home'
  devise_for :teachers
  
  as :teacher do 
  	get "login" => "devise/sessions#new"
  	post "login" => "devise/sessions#create"
  	get "logout" => "devise/sessions#destroy"

  	get "signup" => "devise/registrations#new"
  	post "signup" => "devise/registrations#create"
  	put "signup" => "devise/registrations#update"
  	delete "signup" => "devise/registrations#destroy"

  	get "settings" => "devise/registrations#edit"

  	get "forgot_password" => "devise/passwords#new"
  	get "change_password" => "devise/passwords#edit"
end
end
