<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('green-to-blue.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          max's maximum games
        </template>
        <template #support>these are my games!!!</template>
      </Header>
    </template>

    <PageSection
      class="narrow left"
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        look at these games!!!
      </template>
      
      <template>
       <CardGroup>
         <Card>
           <template #image>
           <img width="100%" src="https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png" />
          
           </template>
           <template>
           i love all kirby!!!  
           </template>
         </Card>

         <Card>
           <template #image>
            <img width="100%" src="https://cdn.vox-cdn.com/thumbor/TzHX2yyr7UiYrrLuBpIXsZ-9zEk=/0x4:1200x604/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23331419/fortnite_chapter_3_season_2_something_strange_1200x607_d87fe3e1b814.jpg"/>
           </template>
           <template>
             fotnite battle pass
           </template>
         </Card>

         <Card>
           <template #image>
          <img width="100%" src="https://cdn.vox-cdn.com/thumbor/PCjcW2iW5hSaedYAuqQUJhD-Tsg=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67342888/rocketleaguef2p.0.jpg"/>
           </template>
           <template>
           weeeeeeeeeeeeeeee  
           </template>
         </Card>

         <Card>
           <template #image>
          <img width="100%" src="https://media.wired.com/photos/5926c1288d4ebc5ab806b602/master/pass/SuperMarioRunHP.jpg"/>
           </template>
           <template>
            that mustache has to be fake 
           </template>
         </Card>

         

       </CardGroup>


      </template>
    
    </PageSection>

  </Directory>
</template>
