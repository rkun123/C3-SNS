class Api::V1::AssetsController < Api::V1::ApplicationController
    def show
        @asset = Asset.where(asset_params).first

        render json: @asset
    end

    def create
        @asset = Asset.new(asset_params)

        if @asset.save
            render json: @asset, status: :created
        else
            render json: @asset.errors, status: :unprocessable_entity
        end
    end

    private

    def asset_params
        params.permit(:id, :file, :file_type, :url)
    end
end
