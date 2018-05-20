<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name: 'historyLink'}">
                        <a class="list-group-item list-group-item-action active">HistoryOrder</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'contactLink'}">
                        <a class="list-group-item list-group-item-action">ContactUs</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'orderingGuideLink'}">
                        <a class="list-group-item list-group-item-action">OrderingGuide</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'deliveryLink'}">
                        <a class="list-group-item list-group-item-action">DeliveryMessage</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


