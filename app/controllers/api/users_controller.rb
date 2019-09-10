class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
        else
            
        end
    end

    def show
        @user = User.find_by(params[:id])
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email) # I believe I should require email here?
                                                            # check with PA
    end     

end
