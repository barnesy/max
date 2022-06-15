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

         <Card url="">
           <template #image>
            
           </template>
           <template>
               title
           </template>
         </Card>

         <Card url="">
           <template #image>
            <g-image src="~/assets/motherboard.png"/>
           </template>
           <template>
               title
           </template>
         </Card>

         <Card url="">
           <template #image>
            <g-image src="~/assets/motherboard.png"/>
           </template>
           <template>
               title
           </template>
         </Card>



       </CardGroup>


      </template>
    
    </PageSection>

  </Directory>
</template>
