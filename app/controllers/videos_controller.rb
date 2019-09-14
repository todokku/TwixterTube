class VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    def show
        @video = Video.find_by(params[:id])
    end

    def index
        @videos = Video.all
    end

    def create
        @video = Video.new(video_params)
        @video.views = 0
        @video.uploader_id = current_user.id
        
    end

    def update
        @video = Video.find_by(params[:id])
    end

    def destroy
        
    end

    private 

    def video_params
        params.require(:video).permit(:title, :description)
    end

end
