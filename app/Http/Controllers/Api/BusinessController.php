<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBusinessRequest;
use App\Http\Requests\UpdateBusinessRequest;
use App\Models\Business;
use App\Http\Resources\BusinessResource;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // to remove $businesses = Business::paginate(10);
        // to remove return BusinessResource::collection($businesses);

        return BusinessResource::collection(
            Business::query()->orderBy('id', 'desc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBusinessRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBusinessRequest $request)
    {
        $business = Business::create($request->all());

        return response( new BusinessResource($business), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Business $business)
    {
        return new BusinessResource($business);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBusinessRequest  $request
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {
        
        $business->update($request->all());

        return response(new BusinessResource($business), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy(Business $business)
    {
        
        $business->delete();

        return response()->noContent(204);
    }
}
