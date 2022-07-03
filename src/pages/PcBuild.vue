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
         <Card url="https://www.amazon.com/ASUS-ROG-D4-Motherboard-Thunderbolt/dp/B09J1RM86X/ref=sr_1_1?crid=1DL1RSFZDINC9&keywords=rog+strix+z690-a+gaming+wifi+d4&qid=1655219037&sprefix=rog+strix+z690-a%2Caps%2C77&sr=8-1">
           <template #image>
            <g-image src="~/assets/my-motherbord.png"/>
           </template>
           <template>
          this is my motherboard
          $334
           </template>
         </Card>

         <Card url="https://amazon.com/Intel-i7-12700K-Desktop-Processor-Unlocked/dp/B09FXNVDBJ/ref=sr_1_2?crid=3GE3LCTRU6AC4&keywords=intel%2Bcpu&qid=1655218395&sprefix=%2Caps%2C46&sr=8-2&th=1">
           <template #image>
             <g-image src="https://c1.neweggimages.com/ProductImage/A4P0S211028AB28F.jpg" />
           </template>
           <template>
             this is my cpu
             $379
           </template>
         </Card>

         <Card url="https://www.amazon.com/Corsair-5000X-Tempered-Glass-Mid-Tower/dp/B08M4BN431/ref=sr_1_8?crid=2UY8O0YSKF8ZL&keywords=pc%2Bcase%2Bcorsair&qid=1655301884&s=electronics&sprefix=pc%2Bcase%2Bcor%2Celectronics%2C65&sr=1-8&th=1">
           <template #image>
            <g-image src="~/assets/case.png" />
           </template>
           <template>
             this is my case
             $184
           </template>
         </Card>

        <Card url="https://www.amazon.com/EVGA-Supernova-Platinum-Warranty-220-PP-1600-X1/dp/B09M9639VW/ref=sr_1_20?crid=2YS2OFOWC8PTN&keywords=pc+power+supply&qid=1655300515&s=electronics&sprefix=pc+power+%2Celectronics%2C86&sr=1-20">
          <template #image>
           <g-image src="https://m.media-amazon.com/images/I/71Lln5+XN9L._AC_SX522_.jpg" />
          </template>

          <template>
             this is my power supply
            $284
          </template>
        </Card>

        <Card url="https://www.amazon.com/Team-T-Force-PC4-24000-3000MHz-TF4D416G3000HC16CDC01/dp/B079KL4ZHB/ref=asc_df_B079KL4ZHB/?tag=hyprod-20&linkCode=df0&hvadid=309818716690&hvpos=&hvnetw=g&hvrand=988782146756555204&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010771&hvtargid=pla-569151535083&psc=1">
          <template #image>
            <g-image src="~/assets/ram.png" />
          </template>
          <template>

            My RAM
            $66
          </template>
        </Card>

        <Card url="https://www.amazon.com/gp/product/B08HR6ZBYJ/ref=ewc_pr_img_1?smid=A1FOYUXL0T4J4U&psc=1">
           <template #image>
            <g-image src="https://m.media-amazon.com/images/I/61wbV8oqAbL._AC_SX679_.jpg" />
          </template>

           <template>
            this is my grafix Card
           $2,109
           </template>
         </Card>


       </CardGroup>


      </template>

    </PageSection>

  </Directory>
</template>
