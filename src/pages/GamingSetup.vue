<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('/blue-to-black.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          My PC Build
        </template>
        <template #support>Here's some stuff about me!!!</template>
      </Header>
    </template>

    <PageSection
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        lets look at these things!!!
      </template>
      one of my favrient
      <template>
       <CardGroup>
         <Card url="https://www.amazon.com/Tablets/b/?ie=UTF8&node=1232597011&ref_=sv_pc_4">
           <template #image>
            <g-image src="~/assets/headphons.jpg"/>
           </template>
           <template>
            my corsair headphones
           </template>
         </Card>

         <Card url="https://www.amazon.com/gp/product/B093BL5TW4/ref=sw_img_1?smid=A35HBQ08LNWVUZ&psc=1">
           <template #image>
            <g-image src="https://m.media-amazon.com/images/I/81pxfTA02rL._AC_SX679_.jpg"/>
           </template>
           <template>
               $179
           </template>
         </Card>

         <Card url="https://www.amazon.com/CORSAIR-Harpoon-RGB-Wireless-Rechargeable/dp/B07KQWR72Z/ref=sr_1_6?crid=172F8ZKNWGSG1&keywords=corsair+mouse&qid=1655385355&sprefix=corsair%2Caps%2C72&sr=8-6">
           <template #image>
            <g-image src="https://m.media-amazon.com/images/I/51w35U77ZXL._AC_SX522_.jpg" />
           </template>
           <template>
           this my mouse
           $40
           </template>
         </Card>

         <Card url="https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQKBQSB/ref=sr_1_2_sspa?crid=2OMK7EFMB5P5U&keywords=macbook%2Bpro&qid=1655388775&s=electronics&sprefix=ma%2Celectronics%2C73&sr=1-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVTdENFRYVTBQM09GJmVuY3J5cHRlZElkPUEwNDIyODY5M1BJV1BKRURWVUFCWCZlbmNyeXB0ZWRBZElkPUEwODYzNjMzM1Q0MjY1Q0xDTVkyTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1">
           <template #image>
            <g-image src="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX679_.jpg"/>
           </template>
           <template>
          this is my mac
           </template>
         </Card>

         <Card class="large" url="https://www.amazon.com/24MV1Y-Pbmiipx-Monitor-FreeSync-Technology/dp/B091G49KSZ/ref=sr_1_2_sspa?crid=3D5IQKZIPABKS&keywords=monitor%2B144hz&qid=1655391241&sprefix=monitor%2Caps%2C89&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVkdURjNGNkRCUzM2JmVuY3J5cHRlZElkPUEwMTk0NjQ2MlMxWE9DNVRaSkNQRCZlbmNyeXB0ZWRBZElkPUEwNjg5MjA4MldVMFVWWVFPQUhMWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1#">
           <template #image>
            <g-image src="https://m.media-amazon.com/images/I/81piAp6cgXL._AC_SX522_.jpg"/>
           </template>
           <template>
            this is my monitor
            $169
           </template>
         </Card>



       </CardGroup>


      </template>

    </PageSection>

  </Directory>
</template>
