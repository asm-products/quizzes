Rails.application.routes.draw do
  root 'pages#home'
  devise_for :teachers
end
