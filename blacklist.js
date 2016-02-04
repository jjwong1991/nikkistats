// blacklist by bunny and morei
var blacklist = [
  ['g3-1', '上衣', '379'],
  ['g3-1', '下装', '350'],
  ['g3-5', '连衣裙', '629'],
  ['g3-5', '连衣裙', '630'],
  ['g3-5', '连衣裙', '430'],
  ['g3-5', '连衣裙', '412'],
  ['g3-5', '连衣裙', '061'],
  ['g3-5', '连衣裙', '392'],
  ['g3-5', '连衣裙', '355'],
  ['g3-5', '连衣裙', '075'],
  ['g3-5', '连衣裙', '308'],
  ['g3-5', '连衣裙', '321'],
  ['g3-5', '外套', '230'],
  ['g3-5', '外套', '231'],
  ['g3-5', '外套', '232'],
  ['g3-6', '上衣', '356'],
  ['g3-6', '下装', '008'],
  ['g3-6', '外套', '215'],
  ['g3-6', '外套', '226'],
  ['g3-6', '外套', '227'],
  ['g3-6', '外套', '213'],
  ['g3-6', '外套', '214'],
  ['1-2', '外套', '260'],
  ['1-2', '连衣裙', '060'],
  ['1-2', '连衣裙', '393'],
  ['1-3', '连衣裙', '584'],
  ['1-3', '连衣裙', '583'],
  ['1-3', '连衣裙', '571'],
  ['1-4', '外套', '214'],
  ['1-4', '连衣裙', '181'],
  ['1-4', '连衣裙', '259'],
  ['1-4', '连衣裙', '356'],
  ['1-5', '连衣裙', '405'],
  ['1-5', '下装', '350'],
  ['1-5', '上衣', '379'],
  ['1-6', '外套', '213'],
  ['1-6', '连衣裙', '356'],
  ['1-6', '外套', '260'],
  ['1-6', '下装', '375'],
  ['1-7', '外套', '215'],
  ['1-7', '外套', '227'],
  ['1-7', '下装', '148'],
  ['1-7', '连衣裙', '083'],
  ['1-7', '下装', '008'],
  ['1-8', '连衣裙', '517'],
  ['1-8', '连衣裙', '406'],
  ['1-8', '外套', '225'],
  ['1-8', '上衣', '243'],
  ['1-9', '连衣裙', '406'],
  ['1-9', '连衣裙', '490'],
  ['1-9', '连衣裙', '489'],
  ['1-9', '连衣裙', '127'],
  ['1-9', '连衣裙', '130'],
  ['1-9', '外套', '225'],
  ['1-9', '上衣', '353'],
  ['1-9', '下装', '333'],
  ['2-1', '上衣', '380'],
  ['2-1', '上衣', '381'],
  ['2-1', '下装', '351'],
  ['2-1', '下装', '352'],
  ['2-1', '连衣裙', '570'],
  ['2-1', '连衣裙', '598'],
  ['2-2', '连衣裙', '27'],
  ['2-2', '连衣裙', '404'],
  ['2-2', '连衣裙', '28'],
  ['2-2', '外套', '220'],
  ['2-2', '外套', '221'],
  ['2-2', '上衣', '417'],
  ['2-3', '外套', '227'],
  ['2-3', '外套', '214'],
  ['2-3', '外套', '223'],
  ['2-3', '连衣裙', '181'],
  ['2-3', '连衣裙', '483'],
  ['2-3', '连衣裙', '484'],
  ['2-3', '连衣裙', '398'],
  ['2-3', '下装', '368'],
  ['2-3', '下装', '334'],
  ['2-4', '连衣裙', '480'],
  ['2-4', '连衣裙', '518'],
  ['2-4', '连衣裙', '519'],
  ['2-4', '外套', '221'],
  ['2-4', '上衣', '380'],
  ['2-4', '上衣', '381'],
  ['2-4', '下装', '351'],
  ['2-4', '下装', '352'],
  ['2-5', '连衣裙', '403'],
  ['2-5', '连衣裙', '520'],
  ['2-5', '连衣裙', '401'],
  ['2-5', '外套', '220'],
  ['2-5', '上衣', '361'],
  ['2-5', '上衣', '385'],
  ['2-5', '上衣', '386'],
  ['2-6', '连衣裙', '480'],
  ['2-7', '连衣裙', '352'],
  ['2-7', '连衣裙', '351'],
  ['2-7', '连衣裙', '353'],
  ['2-7', '连衣裙', '152'],
  ['2-7', '外套', '236'],
  ['2-7', '外套', '221'],
  ['2-8', '连衣裙', '065'],
  ['2-8', '连衣裙', '481'],
  ['2-8', '连衣裙', '480'],
  ['2-8', '连衣裙', '414'],
  ['2-8', '连衣裙', '343'],
  ['2-8', '连衣裙', '381'],
  ['2-8', '下装', '63'],
  ['2-8', '下装', '337'],
  ['2-8', '上衣', '303'],
  ['2-8', '上衣', '302'],
  ['2-8', '连衣裙', '598'],
  ['2-8', '上衣', '408'],
  ['2-8', '下装', '375'],
  ['2-9', '连衣裙', '033'],
  ['2-9', '连衣裙', '042'],
  ['2-9', '连衣裙', '040'],
  ['2-9', '连衣裙', '041'],
  ['2-9', '连衣裙', '409'],
  ['2-9', '外套', '239'],
  ['2-9', '外套', '217'],
  ['2-9', '连衣裙', '603'],
  ['2-支1', '连衣裙', '398'],
  ['2-支1', '连衣裙', '412'],
  ['2-支1', '连衣裙', '546'],
  ['2-支1', '连衣裙', '409'],
  ['2-支1', '连衣裙', '603'],
  ['2-支1', '外套', '254'],
  ['2-支2', '外套', '215'],
  ['2-支2', '下装', '008'],
  ['3-1', '外套', '227'],
  ['3-1', '连衣裙', '340'],
  ['3-1', '连衣裙', '341'],
  ['3-1', '连衣裙', '349'],
  ['3-1', '连衣裙', '356'],
  ['3-1', '连衣裙', '482'],
  ['3-1', '外套', '226'],
  ['3-1', '外套', '213'],
  ['3-2', '连衣裙', '490'],
  ['3-2', '下装', '247'],
  ['3-2', '下装', '093'],
  ['3-3', '外套', '227'],
  ['3-4', '外套', '213'],
  ['3-4', '外套', '260'],
  ['3-5', '连衣裙', '149'],
  ['3-5', '连衣裙', '404'],
  ['3-5', '下装', '240'],
  ['3-5', '下装', '004'],
  ['3-5', '下装', '049'],
  ['3-7', '外套', '414'],
  ['3-7', '连衣裙', '598'],
  ['3-7', '连衣裙', '583'],
  ['3-7', '连衣裙', '460'],
  ['3-7', '上衣', '408'],
  ['3-7', '下装', '375'],
  ['3-8', '连衣裙', '149'],
  ['3-8', '下装', '004'],
  ['3-8', '连衣裙', '139'],
  ['3-9', '上衣', '092'],
  ['3-10', '上衣', '379'],
  ['3-10', '下装', '350'],
  ['3-11', '外套', '239'],
  ['3-11', '连衣裙', '032'],
  ['3-11', '连衣裙', '603'],
  ['3-12', '连衣裙', '404'],
  ['3-12', '连衣裙', '401'],
  ['3-12', '连衣裙', '27'],
  ['3-12', '连衣裙', '372'],
  ['3-12', '上衣', '339'],
  ['3-12', '下装', '318'],
  ['3-支1', '连衣裙', '061'],
  ['4-1', '连衣裙', '27'],
  ['4-4', '连衣裙', '480'],
  ['4-4', '连衣裙', '598'],
  ['4-4', '连衣裙', '343'],
  ['4-5', '上衣', '004'],
  ['4-5', '下装', '212'],
  ['4-5', '下装', '086'],
  ['4-6', '连衣裙', '585'],
  ['4-6', '外套', '217'],
  ['4-6', '外套', '225'],
  ['4-6', '连衣裙', '342'],
  ['4-6', '连衣裙', '024'],
  ['4-6', '上衣', '394'],
  ['4-6', '上衣', '391'],
  ['4-6', '上衣', '243'],
  ['4-6', '上衣', '356'],
  ['4-6', '下装', '64'],
  ['4-6', '下装', '362'],
  ['4-6', '下装', '366'],
  ['4-6', '下装', '368'],
  ['4-7', '连衣裙', '578'],
  ['4-7', '连衣裙', '397'],
  ['4-7', '连衣裙', '412'],
  ['4-7', '连衣裙', '126'],
  ['4-7', '上衣', '90'],
  ['4-7', '连衣裙', '584'],
  ['4-9', '连衣裙', '571'],
  ['4-9', '连衣裙', '583'],
  ['4-9', '连衣裙', '584'],
  ['4-11', '外套', '214'],
  ['4-11', '外套', '227'],
  ['4-11', '外套', '213'],
  ['4-11', '外套', '226'],
  ['4-11', '下装', '148'],
  ['4-支1', '上衣', '381'],
  ['4-支1', '上衣', '380'],
  ['4-支1', '下装', '352'],
  ['4-支1', '下装', '351'],
  ['4-支1', '下装', '369'],
  ['4-支1', '连衣裙', '67'],
  ['4-支1', '连衣裙', '125'],
  ['4-支1', '连衣裙', '124'],
  ['4-支1', '下装', '338'],
  ['4-支1', '连衣裙', '537'],
  ['4-支1', '连衣裙', '133'],
  ['4-支1', '连衣裙', '570'],
  ['4-支3', '上衣', '379'],
  ['4-支3', '下装', '350'],
  ['5-1', '连衣裙', '149'],
  ['5-1', '连衣裙', '404'],
  ['5-1', '连衣裙', '221'],
  ['5-1', '连衣裙', '157'],
  ['5-1', '上衣', '256'],
  ['5-1', '下装', '103'],
  ['5-1', '下装', '240'],
  ['5-2', '连衣裙', '484'],
  ['5-2', '外套', '213'],
  ['5-2', '外套', '214'],
  ['5-2', '外套', '227'],
  ['5-4', '外套', '052'],
  ['5-4', '外套', '050'],
  ['5-4', '连衣裙', '492'],
  ['5-6', '连衣裙', '270'],
  ['5-6', '连衣裙', '551'],
  ['5-7', '连衣裙', '125'],
  ['5-8', '连衣裙', '509'],
  ['5-8', '连衣裙', '181'],
  ['5-8', '连衣裙', '296'],
  ['5-9', '连衣裙', '406'],
  ['5-9', '连衣裙', '223'],
  ['5-9', '连衣裙', '596'],
  ['5-10', '连衣裙', '481'],
  ['5-10', '连衣裙', '583'],
  ['5-10', '上衣', '408'],
  ['5-10', '下装', '375'],
  ['5-11', '上衣', '347'],
  ['5-12', '连衣裙', '393'],
  ['5-12', '连衣裙', '264'],
  ['5-12', '连衣裙', '167'],
  ['5-12', '连衣裙', '602'],
  ['5-12', '外套', '205'],
  ['5-12', '下装', '376'],
  ['5-12', '下装', '329'],
  ['5-12', '下装', '330'],
  ['5-支1', '连衣裙', '209'],
  ['5-支1', '连衣裙', '187'],
  ['5-支1', '连衣裙', '435'],
  ['5-支1', '连衣裙', '27'],
  ['5-支1', '连衣裙', '143'],
  ['5-支1', '连衣裙', '270'],
  ['5-支1', '上衣', '381'],
  ['5-支1', '上衣', '380'],
  ['5-支1', '下装', '352'],
  ['5-支1', '下装', '351'],
  ['5-支2', '连衣裙', '372'],
  ['5-支2', '上衣', '256'],
  ['5-支2', '上衣', '351'],
  ['5-支2', '下装', '331'],
  ['5-支2', '连衣裙', '404'],
  ['5-支3', '外套', '227'],
  ['6-1', '外套', '219'],
  ['6-1', '连衣裙', '537'],
  ['6-1', '连衣裙', '598'],
  ['6-1', '上衣', '381'],
  ['6-1', '上衣', '380'],
  ['6-1', '下装', '352'],
  ['6-1', '下装', '351'],
  ['6-2', '连衣裙', '571'],
  ['6-3', '连衣裙', '480'],
  ['6-3', '连衣裙', '481'],
  ['6-3', '连衣裙', '414'],
  ['6-3', '连衣裙', '305'],
  ['6-4', '连衣裙', '27'],
  ['6-4', '连衣裙', '28'],
  ['6-4', '上衣', '351'],
  ['6-4', '上衣', '375'],
  ['6-4', '上衣', '376'],
  ['6-4', '上衣', '80'],
  ['6-4', '上衣', '410'],
  ['6-4', '下装', '331'],
  ['6-5', '连衣裙', '570'],
  ['6-6', '下装', '095'],
  ['6-6', '上衣', '133'],
  ['6-6', '上衣', '132'],
  ['6-6', '上衣', '99'],
  ['6-6', '上衣', '307'],
  ['6-6', '上衣', '118'],
  ['6-6', '上衣', '341'],
  ['6-6', '下装', '136'],
  ['6-6', '下装', '240'],
  ['6-6', '下装', '004'],
  ['6-6', '下装', '31'],
  ['6-7', '外套', '140'],
  ['6-7', '外套', '045'],
  ['6-7', '外套', '046'],
  ['6-7', '上衣', '381'],
  ['6-7', '上衣', '380'],
  ['6-7', '下装', '352'],
  ['6-7', '下装', '351'],
  ['6-7', '下装', '338'],
  ['6-7', '连衣裙', '537'],
  ['6-8', '外套', '214'],
  ['6-8', '外套', '224'],
  ['6-8', '外套', '227'],
  ['6-支1', '连衣裙', '596'],
  ['7-1', '连衣裙', '259'],
  ['7-1', '连衣裙', '308'],
  ['7-1', '连衣裙', '282'],
  ['7-2', '连衣裙', '278'],
  ['7-2', '连衣裙', '061'],
  ['7-2', '外套', '202'],
  ['7-2', '外套', '201'],
  ['7-2', '连衣裙', '412'],
  ['7-2', '连衣裙', '430'],
  ['7-2', '连衣裙', '571'],
  ['7-2', '连衣裙', '584'],
  ['7-2', '外套', '163'],
  ['7-3', '连衣裙', '282'],
  ['7-3', '连衣裙', '503'],
  ['7-4', '连衣裙', '584'],
  ['7-4', '连衣裙', '585'],
  ['7-4', '连衣裙', '571'],
  ['7-5', '连衣裙', '404'],
  ['7-6', '连衣裙', '042'],
  ['7-6', '连衣裙', '396'],
  ['7-6', '连衣裙', '174'],
  ['7-9', '连衣裙', '156'],
  ['7-9', '连衣裙', '143'],
  ['7-支1', '连衣裙', '264'],
  ['7-支2', '连衣裙', '598'],
  ['7-支2', '上衣', '408'],
  ['7-支2', '下装', '375'],
  ['7-支3', '下装', '353'],
  ['7-支3', '上衣', '383'],
  ['7-支4', '上衣', '409'],
  ['7-支4', '下装', '376'],
  ['8-4', '上衣', '191'],
  ['8-4', '上衣', '42'],
  ['8-4', '上衣', '43'],
  ['8-4', '上衣', '41'],
  ['8-4', '下装', '50'],
  ['8-4', '下装', '199'],
  ['8-4', '下装', '241'],
  ['8-5', '连衣裙', '429'],
  ['8-5', '连衣裙', '413'],
  ['8-5', '连衣裙', '377'],
  ['8-5', '连衣裙', '583'],
  ['8-5', '上衣', '348'],
  ['8-5', '下装', '328'],
  ['8-6', '连衣裙', '355'],
  ['8-6', '连衣裙', '584'],
  ['8-6', '连衣裙', '585'],
  ['8-6', '外套', '202'],
  ['8-9', '饰品', '262'],
  ['8-9', '上衣', '408'],
  ['8-9', '下装', '375'],
  ['8-支2', '外套', '260'],
  ['8-支3', '连衣裙', '409'],
  ['8-支3', '外套', '217'],
  ['8-支3', '外套', '239'],
  ['9-1', '连衣裙', '006'],
  ['9-1', '连衣裙', '149'],
  ['9-4', '连衣裙', '585'],
  ['9-4', '连衣裙', '584'],
  ['9-4', '连衣裙', '535'],
  ['9-6-1', '连衣裙', '482'],
  ['9-6-1', '连衣裙', '484'],
  ['9-6-1', '连衣裙', '356'],
  ['9-6-1', '外套', '214'],
  ['9-6-1', '外套', '213'],
  ['9-6-1', '外套', '227'],
  ['9-6-1', '外套', '226'],
  ['9-6-2', '外套', '214'],
  ['9-6-2', '外套', '227'],
  ['9-6-2', '外套', '213'],
  ['9-6-2', '外套', '226'],
  ['9-9-2', '上衣', '379'],
  ['9-9-2', '下装', '350'],
  ['9-9-3', '外套', '231'],
  ['9-9-3', '外套', '232'],
  ['9-支2', '外套', '078'],
  ['9-支3', '上衣', '386'],
  ['10-2', '连衣裙', '271'],
  ['10-2', '连衣裙', '272'],
  ['10-2', '连衣裙', '276'],
  ['10-2', '连衣裙', '275'],
  ['10-3', '连衣裙', '393'],
  ['10-3', '连衣裙', '394'],
  ['10-3', '连衣裙', '392'],
  ['10-3', '连衣裙', '305'],
  ['10-3', '上衣', '349'],
  ['10-3', '上衣', '350'],
  ['10-3', '上衣', '409'],
  ['10-3', '下装', '376'],
  ['10-3', '下装', '329'],
  ['10-3', '下装', '330'],
  ['10-3', '外套', '140'],
  ['10-3', '外套', '200'],
  ['10-5', '连衣裙', '557'],
  ['10-5', '外套', '214'],
  ['10-5', '外套', '227'],
  ['10-5', '外套', '226'],
  ['10-5', '外套', '213'],
  ['10-6', '上衣', '362'],
  ['10-6', '下装', '341'],
  ['10-8', '外套', '266'],
  ['10-9-2', '连衣裙', '482'],
  ['10-9-2', '外套', '214'],
  ['10-9-2', '外套', '227'],
  ['10-9-2', '外套', '226'],
  ['10-9-2', '外套', '213'],
  ['10-支1', '连衣裙', '404'],
  ['10-支1', '连衣裙', '402'],
  ['10-支1', '连衣裙', '401'],
  ['10-支1', '连衣裙', '403'],
  ['10-支3', '连衣裙', '409'],
  ['10-支3', '连衣裙', '603'],
  ['11-1', '连衣裙', '006'],
  ['11-1', '上衣', '351'],
  ['11-1', '下装', '331'],
  ['11-1', '下装', '103'],
  ['11-2', '连衣裙', '214'],
  ['11-2', '连衣裙', '063'],
  ['11-2', '连衣裙', '098'],
  ['11-2', '上衣', '258'],
  ['11-4', '外套', '260'],
  ['11-4', '连衣裙', '274'],
  ['11-4', '连衣裙', '270'],
  ['11-4', '上衣', '409'],
  ['11-4', '下装', '376'],
  ['11-5', '外套', '202'],
  ['11-5', '外套', '201'],
  ['11-5', '外套', '300'],
  ['11-5', '外套', '301'],
  ['11-5', '外套', '223'],
  ['11-6', '下装', '368'],
  ['11-7', '外套', '239'],
  ['11-7', '外套', '217'],
  ['11-7', '连衣裙', '603'],
  ['11-7', '连衣裙', '409'],
  ['11-7', '连衣裙', '391'],
  ['11-7', '连衣裙', '032'],
  ['11-8', '外套', '217'],
  ['11-8', '连衣裙', '067'],
  ['11-9', '连衣裙', '404'],
  ['11-9', '连衣裙', '401'],
  ['11-9', '连衣裙', '403'],
  ['11-9', '连衣裙', '402'],
  ['11-支1', '外套', '213'],
  ['11-支1', '外套', '214'],
  ['11-支1', '外套', '227'],
  ['11-支1', '连衣裙', '264'],
  ['11-支1', '连衣裙', '415'],
  ['11-支2', '外套', '215'],
];