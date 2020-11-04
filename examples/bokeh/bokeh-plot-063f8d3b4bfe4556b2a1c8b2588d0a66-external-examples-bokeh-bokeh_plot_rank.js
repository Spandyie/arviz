(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("115233c1-7823-486d-85a9-1e722f898a27");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '115233c1-7823-486d-85a9-1e722f898a27' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"213c6005-1924-4ab6-8ef4-0553b5f2038b":{"roots":{"references":[{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90701","type":"Span"},{"attributes":{},"id":"90750","type":"UnionRenderers"},{"attributes":{},"id":"90751","type":"Selection"},{"attributes":{},"id":"90766","type":"Selection"},{"attributes":{},"id":"90764","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90674","type":"PolyAnnotation"},{"attributes":{},"id":"90631","type":"ResetTool"},{"attributes":{},"id":"90748","type":"UnionRenderers"},{"attributes":{},"id":"90767","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90768"},"selection_policy":{"id":"90767"}},"id":"90730","type":"ColumnDataSource"},{"attributes":{},"id":"90749","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90673","type":"BoxAnnotation"},{"attributes":{},"id":"90765","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90627"},"dimension":1,"ticker":null},"id":"90630","type":"Grid"},{"attributes":{"children":[{"id":"90772"},{"id":"90770"}]},"id":"90773","type":"Column"},{"attributes":{},"id":"90743","type":"BasicTickFormatter"},{"attributes":{},"id":"90665","type":"ResetTool"},{"attributes":{"children":[[{"id":"90614"},0,0],[{"id":"90650"},0,1]]},"id":"90770","type":"GridBox"},{"attributes":{"text":"tau"},"id":"90710","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90698","type":"VBar"},{"attributes":{},"id":"90655","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90753"},"selection_policy":{"id":"90752"}},"id":"90702","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90640","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90703","type":"VBar"},{"attributes":{"axis":{"id":"90657"},"ticker":null},"id":"90660","type":"Grid"},{"attributes":{},"id":"90621","type":"LinearScale"},{"attributes":{},"id":"90752","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"90641"},{"id":"90675"}],"tools":[{"id":"90631"},{"id":"90632"},{"id":"90633"},{"id":"90634"},{"id":"90635"},{"id":"90636"},{"id":"90637"},{"id":"90638"},{"id":"90665"},{"id":"90666"},{"id":"90667"},{"id":"90668"},{"id":"90669"},{"id":"90670"},{"id":"90671"},{"id":"90672"}]},"id":"90771","type":"ProxyToolbar"},{"attributes":{"source":{"id":"90696"}},"id":"90700","type":"CDSView"},{"attributes":{"axis":{"id":"90623"},"ticker":null},"id":"90626","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90692","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90707","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90743"},"ticker":{"id":"90708"}},"id":"90627","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90741"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90624"}},"id":"90623","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90665"},{"id":"90666"},{"id":"90667"},{"id":"90668"},{"id":"90669"},{"id":"90670"},{"id":"90671"},{"id":"90672"}]},"id":"90675","type":"Toolbar"},{"attributes":{},"id":"90746","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90686","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90691","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90695","type":"Span"},{"attributes":{},"id":"90762","type":"Selection"},{"attributes":{"overlay":{"id":"90639"}},"id":"90633","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90749"},"selection_policy":{"id":"90748"}},"id":"90690","type":"ColumnDataSource"},{"attributes":{},"id":"90761","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"90690"},"glyph":{"id":"90691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90692"},"selection_glyph":null,"view":{"id":"90694"}},"id":"90693","type":"GlyphRenderer"},{"attributes":{},"id":"90753","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90731","type":"VBar"},{"attributes":{"source":{"id":"90684"}},"id":"90688","type":"CDSView"},{"attributes":{},"id":"90624","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90747"},"selection_policy":{"id":"90746"}},"id":"90684","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"90657"}],"center":[{"id":"90660"},{"id":"90664"},{"id":"90717"},{"id":"90723"},{"id":"90729"},{"id":"90735"}],"left":[{"id":"90661"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90715"},{"id":"90721"},{"id":"90727"},{"id":"90733"}],"title":{"id":"90738"},"toolbar":{"id":"90675"},"toolbar_location":null,"x_range":{"id":"90615"},"x_scale":{"id":"90653"},"y_range":{"id":"90617"},"y_scale":{"id":"90655"}},"id":"90650","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90741","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90735","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90766"},"selection_policy":{"id":"90765"}},"id":"90724","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"90730"},"glyph":{"id":"90731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90732"},"selection_glyph":null,"view":{"id":"90734"}},"id":"90733","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90718"},"glyph":{"id":"90719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90720"},"selection_glyph":null,"view":{"id":"90722"}},"id":"90721","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"90708","type":"FixedTicker"},{"attributes":{},"id":"90758","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90714","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"90736","type":"FixedTicker"},{"attributes":{"callback":null},"id":"90672","type":"HoverTool"},{"attributes":{},"id":"90615","type":"DataRange1d"},{"attributes":{"source":{"id":"90712"}},"id":"90716","type":"CDSView"},{"attributes":{},"id":"90668","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90729","type":"Span"},{"attributes":{"overlay":{"id":"90674"}},"id":"90669","type":"LassoSelectTool"},{"attributes":{},"id":"90756","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"90730"}},"id":"90734","type":"CDSView"},{"attributes":{"data_source":{"id":"90724"},"glyph":{"id":"90725"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90726"},"selection_glyph":null,"view":{"id":"90728"}},"id":"90727","type":"GlyphRenderer"},{"attributes":{},"id":"90747","type":"Selection"},{"attributes":{"data_source":{"id":"90684"},"glyph":{"id":"90685"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90686"},"selection_glyph":null,"view":{"id":"90688"}},"id":"90687","type":"GlyphRenderer"},{"attributes":{},"id":"90653","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90726","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90697","type":"VBar"},{"attributes":{"source":{"id":"90718"}},"id":"90722","type":"CDSView"},{"attributes":{},"id":"90763","type":"UnionRenderers"},{"attributes":{"source":{"id":"90690"}},"id":"90694","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90725","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90751"},"selection_policy":{"id":"90750"}},"id":"90696","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90719","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90764"},"selection_policy":{"id":"90763"}},"id":"90718","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90723","type":"Span"},{"attributes":{"callback":null},"id":"90638","type":"HoverTool"},{"attributes":{"data_source":{"id":"90712"},"glyph":{"id":"90713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90714"},"selection_glyph":null,"view":{"id":"90716"}},"id":"90715","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90720","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90717","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90713","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90756"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90658"}},"id":"90657","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90689","type":"Span"},{"attributes":{},"id":"90658","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90762"},"selection_policy":{"id":"90761"}},"id":"90712","type":"ColumnDataSource"},{"attributes":{},"id":"90671","type":"SaveTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90758"},"ticker":{"id":"90736"}},"id":"90661","type":"LinearAxis"},{"attributes":{"source":{"id":"90702"}},"id":"90706","type":"CDSView"},{"attributes":{},"id":"90632","type":"PanTool"},{"attributes":{},"id":"90670","type":"UndoTool"},{"attributes":{"source":{"id":"90724"}},"id":"90728","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90631"},{"id":"90632"},{"id":"90633"},{"id":"90634"},{"id":"90635"},{"id":"90636"},{"id":"90637"},{"id":"90638"}]},"id":"90641","type":"Toolbar"},{"attributes":{"text":"mu"},"id":"90738","type":"Title"},{"attributes":{},"id":"90666","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90732","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90639","type":"BoxAnnotation"},{"attributes":{},"id":"90634","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90685","type":"VBar"},{"attributes":{"overlay":{"id":"90673"}},"id":"90667","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"90623"}],"center":[{"id":"90626"},{"id":"90630"},{"id":"90689"},{"id":"90695"},{"id":"90701"},{"id":"90707"}],"left":[{"id":"90627"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90687"},{"id":"90693"},{"id":"90699"},{"id":"90705"}],"title":{"id":"90710"},"toolbar":{"id":"90641"},"toolbar_location":null,"x_range":{"id":"90615"},"x_scale":{"id":"90619"},"y_range":{"id":"90617"},"y_scale":{"id":"90621"}},"id":"90614","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"90661"},"dimension":1,"ticker":null},"id":"90664","type":"Grid"},{"attributes":{"toolbar":{"id":"90771"},"toolbar_location":"above"},"id":"90772","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"90640"}},"id":"90635","type":"LassoSelectTool"},{"attributes":{},"id":"90617","type":"DataRange1d"},{"attributes":{},"id":"90637","type":"SaveTool"},{"attributes":{"data_source":{"id":"90702"},"glyph":{"id":"90703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90704"},"selection_glyph":null,"view":{"id":"90706"}},"id":"90705","type":"GlyphRenderer"},{"attributes":{},"id":"90636","type":"UndoTool"},{"attributes":{},"id":"90768","type":"Selection"},{"attributes":{},"id":"90619","type":"LinearScale"},{"attributes":{"data_source":{"id":"90696"},"glyph":{"id":"90697"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90698"},"selection_glyph":null,"view":{"id":"90700"}},"id":"90699","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90704","type":"VBar"}],"root_ids":["90773"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"213c6005-1924-4ab6-8ef4-0553b5f2038b","root_ids":["90773"],"roots":{"90773":"115233c1-7823-486d-85a9-1e722f898a27"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();